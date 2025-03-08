(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scrollBarColor":"#000000","scripts":{"showPopupImage":TDV.Tour.Script.showPopupImage,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setLocale":TDV.Tour.Script.setLocale,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showWindow":TDV.Tour.Script.showWindow,"openLink":TDV.Tour.Script.openLink,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getOverlays":TDV.Tour.Script.getOverlays,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getPixels":TDV.Tour.Script.getPixels,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setValue":TDV.Tour.Script.setValue,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"cloneBindings":TDV.Tour.Script.cloneBindings,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"playAudioList":TDV.Tour.Script.playAudioList,"init":TDV.Tour.Script.init,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"mixObject":TDV.Tour.Script.mixObject,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizShowScore":TDV.Tour.Script.quizShowScore,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaByName":TDV.Tour.Script.getMediaByName,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"downloadFile":TDV.Tour.Script.downloadFile,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getComponentByName":TDV.Tour.Script.getComponentByName,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizStart":TDV.Tour.Script.quizStart,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"executeJS":TDV.Tour.Script.executeJS,"getMainViewer":TDV.Tour.Script.getMainViewer,"getKey":TDV.Tour.Script.getKey,"historyGoForward":TDV.Tour.Script.historyGoForward,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"clone":TDV.Tour.Script.clone,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"quizFinish":TDV.Tour.Script.quizFinish,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"createTween":TDV.Tour.Script.createTween,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"initAnalytics":TDV.Tour.Script.initAnalytics,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"resumePlayers":TDV.Tour.Script.resumePlayers,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"enableVR":TDV.Tour.Script.enableVR,"existsKey":TDV.Tour.Script.existsKey,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"unregisterKey":TDV.Tour.Script.unregisterKey,"shareSocial":TDV.Tour.Script.shareSocial,"disableVR":TDV.Tour.Script.disableVR,"toggleVR":TDV.Tour.Script.toggleVR,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"translate":TDV.Tour.Script.translate,"initQuiz":TDV.Tour.Script.initQuiz,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"registerKey":TDV.Tour.Script.registerKey,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showPopupMedia":TDV.Tour.Script.showPopupMedia},"height":"100%","start":"this.init()","id":"rootPlayer","propagateClick":false,"data":{"defaultLocale":"es","displayTooltipInTouchScreens":true,"history":{},"name":"Player423","locales":{"es":"locale/es.txt"},"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"rate":1}},"backgroundColor":["#FFFFFF"],"defaultMenu":["fullscreen","mute","rotation"],"hash": "5a63a502abb2367a965cb3b139a8c5b0df9292d7928837b0d7f343df454781fb", "definitions": [{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"enterPointingToHorizon":true,"id":"panorama_78334548_73EB_CD89_41C4_F2B3CA956DB8_camera","initialSequence":"this.sequence_79756696_73EA_4C99_41D0_57E54EC1BD4C","class":"PanoramaCamera"},{"id":"mainPlayList","items":[{"end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_78334548_73EB_CD89_41C4_F2B3CA956DB8_camera","class":"PanoramaPlayListItem","media":"this.panorama_78334548_73EB_CD89_41C4_F2B3CA956DB8"}],"class":"PlayList"},{"thumbnailUrl":"media/panorama_78334548_73EB_CD89_41C4_F2B3CA956DB8_t.webp","hfov":360,"frames":[{"thumbnailUrl":"media/panorama_78334548_73EB_CD89_41C4_F2B3CA956DB8_t.webp","class":"CubicPanoramaFrame","cube":{"levels":[{"height":4608,"rowCount":9,"width":27648,"colCount":54,"tags":"ondemand","url":"media/panorama_78334548_73EB_CD89_41C4_F2B3CA956DB8_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel"},{"height":2560,"rowCount":5,"width":15360,"colCount":30,"tags":"ondemand","url":"media/panorama_78334548_73EB_CD89_41C4_F2B3CA956DB8_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel"},{"height":1536,"rowCount":3,"width":9216,"colCount":18,"tags":"ondemand","url":"media/panorama_78334548_73EB_CD89_41C4_F2B3CA956DB8_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel"},{"height":1024,"rowCount":2,"width":6144,"colCount":12,"tags":"ondemand","url":"media/panorama_78334548_73EB_CD89_41C4_F2B3CA956DB8_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel"},{"height":512,"rowCount":1,"width":3072,"colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_78334548_73EB_CD89_41C4_F2B3CA956DB8_0/{face}/4/{row}_{column}.webp","class":"TiledImageResourceLevel"}],"class":"ImageResource"}}],"class":"Panorama","data":{"label":"DSCN0176 Panorama"},"vfov":180,"label":trans('panorama_78334548_73EB_CD89_41C4_F2B3CA956DB8.label'),"id":"panorama_78334548_73EB_CD89_41C4_F2B3CA956DB8","hfovMax":130},{"displayPlaybackBar":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","aaEnabled":true,"class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer"},{"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTop":0,"subtitlesTextShadowColor":"#000000","subtitlesBottom":50,"playbackBarProgressBorderSize":0,"toolTipPaddingRight":6,"vrPointerColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","propagateClick":false,"progressBorderColor":"#000000","toolTipTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"playbackBarBottom":5,"toolTipFontFamily":"Arial","playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"progressBottom":10,"subtitlesBorderColor":"#FFFFFF","progressHeight":2,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBackgroundColorDirection":"vertical","progressBarBorderRadius":2,"progressBorderSize":0,"toolTipPaddingTop":4,"toolTipBorderColor":"#767676","progressBarBorderSize":0,"playbackBarBorderSize":0,"playbackBarHeadHeight":15,"vrThumbstickRotationStep":20,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarRight":0,"data":{"name":"Main Viewer"},"subtitlesFontFamily":"Arial","playbackBarBorderColor":"#FFFFFF","toolTipShadowColor":"#333138","progressBorderRadius":2,"playbackBarHeight":10,"playbackBarLeft":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","progressLeft":"33%","playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarBackgroundOpacity":1,"subtitlesGap":0,"playbackBarHeadBorderSize":0,"subtitlesBackgroundColor":"#000000","vrPointerSelectionTime":2000,"playbackBarHeadBorderRadius":0,"id":"MainViewer","subtitlesTextShadowOpacity":1,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadow":true,"vrPointerSelectionColor":"#FF6600","subtitlesFontColor":"#FFFFFF","firstTransitionDuration":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBorderRadius":0,"toolTipPaddingLeft":6,"toolTipFontSize":"1.11vmin","toolTipPaddingBottom":4,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontColor":"#606060","progressBackgroundColorRatios":[0],"subtitlesTextShadowVerticalLength":1,"minHeight":50,"playbackBarHeadWidth":6,"progressRight":"33%","class":"ViewerArea","width":"100%","minWidth":100,"progressBarBackgroundColorDirection":"horizontal","height":"100%","progressOpacity":0.7,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0]},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_79756696_73EA_4C99_41D0_57E54EC1BD4C","class":"PanoramaCameraSequence"}],"layout":"absolute","scrollBarMargin":2,"minHeight":0,"minWidth":0,"children":["this.MainViewer"],"backgroundColorRatios":[0],"class":"Player","width":"100%","gap":10};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.7, Fri Mar 7 2025