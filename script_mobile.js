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
var script = {"layout":"absolute","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","id":"rootPlayer","data":{"defaultLocale":"es","textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"rate":1},"history":{},"displayTooltipInTouchScreens":true,"name":"Player486","locales":{"es":"locale/es.txt"}},"backgroundColor":["#FFFFFF"],"propagateClick":false,"minHeight":20,"backgroundColorRatios":[0],"minWidth":20,"children":["this.MainViewer_mobile","this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile","this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile","this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile","this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile","this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile"],"buttonToggleFullscreen":"this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile","hash": "795e3e8eda5a0620b83afe7c819d9b7040f22b5750ed65a367a1b27f4985d3ad", "definitions": [{"id":"effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7","duration":200,"class":"FadeInEffect"},{"scrollBarWidth":5,"backgroundOpacity":0.9,"bottom":10,"id":"Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile","layout":"absolute","left":"2%","backgroundColor":["#534741"],"data":{"name":"SETTINGS"},"right":"2%","propagateClick":false,"minHeight":1,"backgroundColorRatios":[0],"children":["this.Container_1185BA07_1C82_BB09_4190_3425ACEF39CF_mobile","this.Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36_mobile","this.Container_129084CF_1C83_AF18_418C_2D8031993BE6_mobile"],"minWidth":1,"scrollBarColor":"#000000","class":"Container","height":50,"scrollBarMargin":1,"overflow":"scroll","gap":5},{"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","top":"35%","backgroundOpacity":0,"bottom":"35%","id":"IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile","tabIndex":0,"iconURL":"skin/IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile.png","data":{"name":"next"},"maxHeight":46,"maxWidth":46,"propagateClick":false,"right":"2%","minHeight":1,"minWidth":1,"class":"IconButton","width":46,"horizontalAlign":"center","transparencyActive":true,"visible":false,"verticalAlign":"middle"},{"id":"effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5","duration":200,"class":"FadeOutEffect"},{"id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_9EE53DE7_92EF_508C_41C0_32718D553146_camera","media":"this.panorama_9EE53DE7_92EF_508C_41C0_32718D553146"}],"class":"PlayList"},{"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)","top":"35%","backgroundOpacity":0,"bottom":"35%","id":"IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile","tabIndex":0,"iconURL":"skin/IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile.png","left":"2%","maxHeight":46,"maxWidth":46,"data":{"name":"previous"},"propagateClick":false,"minHeight":1,"minWidth":1,"class":"IconButton","width":46,"horizontalAlign":"center","transparencyActive":true,"visible":false,"verticalAlign":"middle"},{"verticalAlign":"middle","top":"0%","backgroundOpacity":0,"layout":"horizontal","id":"Container_1185BA07_1C82_BB09_4190_3425ACEF39CF_mobile","scrollBarWidth":5,"left":"0%","data":{"name":"Left"},"propagateClick":false,"minHeight":1,"children":["this.IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile","this.IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile","this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile"],"minWidth":1,"scrollBarColor":"#000000","class":"Container","width":"50%","height":"100%","scrollBarMargin":1,"paddingLeft":5,"overflow":"scroll"},{"iconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile.png","backgroundOpacity":0,"id":"IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile","tabIndex":0,"data":{"name":"Down"},"propagateClick":false,"pressedIconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile_pressed.png","minHeight":0,"minWidth":0,"class":"IconButton","width":23,"height":23,"horizontalAlign":"center","transparencyActive":true,"rollOverIconURL":"skin/IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile_rollover.png","verticalAlign":"middle"},{"rollOverOpacity":0.8,"distance":2,"opacity":0.4,"children":["this.MenuItem_9E8A5603_92F7_7384_41C9_4A4EE8D54383"],"backgroundColor":"#404040","rollOverFontColor":"#FFFFFF","rollOverBackgroundColor":"#000000","fontColor":"#FFFFFF","selectedBackgroundColor":"#202020","class":"Menu","label":trans('Menu_9E9365B5_92F7_708C_41D5_73C74876EA77.label'),"id":"Menu_9E9365B5_92F7_708C_41D5_73C74876EA77","fontFamily":"Arial","selectedFontColor":"#FFFFFF"},{"iconURL":"skin/IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile.png","backgroundOpacity":0,"id":"IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile","tabIndex":0,"data":{"name":"VR"},"maxHeight":46,"maxWidth":46,"propagateClick":false,"minHeight":1,"minWidth":1,"class":"IconButton","width":46,"height":46,"horizontalAlign":"center","transparencyActive":true,"verticalAlign":"middle"},{"id":"effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050","duration":100,"class":"FadeInEffect"},{"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, 'showEffect', false)}.bind(this); visibleFunc(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_3A451B34_1C82_9908_41AD_37B1C5A316C2, 'hideEffect', false)}.bind(this); invisibleFunc(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile); invisibleFunc(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile); invisibleFunc(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile)","iconURL":"skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile.png","backgroundOpacity":0,"bottom":0,"id":"IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile","tabIndex":0,"left":"40%","maxHeight":46,"maxWidth":46,"data":{"name":"-Expand"},"propagateClick":false,"right":"40%","minHeight":1,"minWidth":1,"class":"IconButton","height":46,"horizontalAlign":"center","transparencyActive":true,"visible":false,"verticalAlign":"middle"},{"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)","iconURL":"skin/IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile.png","backgroundOpacity":0,"id":"IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile","tabIndex":0,"data":{"name":"Next"},"propagateClick":false,"minHeight":0,"minWidth":0,"class":"IconButton","width":46,"height":46,"horizontalAlign":"center","transparencyActive":true,"verticalAlign":"middle"},{"iconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile.png","backgroundOpacity":0,"id":"IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile","tabIndex":0,"data":{"name":"Right"},"propagateClick":false,"pressedIconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile_pressed.png","minHeight":0,"minWidth":0,"class":"IconButton","width":23,"height":23,"horizontalAlign":"center","transparencyActive":true,"rollOverIconURL":"skin/IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile_rollover.png","verticalAlign":"middle"},{"subtitlesGap":0,"playbackBarHeadBorderRadius":0,"subtitlesBackgroundColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"vrPointerSelectionTime":2000,"vrPointerSelectionColor":"#FF6600","subtitlesTextShadowHorizontalLength":1,"data":{"name":"Main Viewer"},"toolTipShadowColor":"#333333","toolTipTextShadowBlurRadius":1,"toolTipPaddingRight":3,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"progressBackgroundColor":["#FFFFFF"],"progressBorderColor":"#000000","toolTipFontColor":"#606060","toolTipPaddingLeft":3,"toolTipBorderRadius":1,"vrThumbstickRotationStep":20,"subtitlesBorderColor":"#FFFFFF","progressLeft":0,"playbackBarBottom":5,"progressBottom":0,"toolTipShadowBlurRadius":1,"progressBorderSize":0,"toolTipTextShadowColor":"#000000","progressHeight":10,"firstTransitionDuration":0,"progressBarBorderRadius":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadWidth":6,"toolTipFontFamily":"Arial","progressBarBorderSize":0,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","playbackBarRight":0,"id":"MainViewer_mobile","playbackBarProgressBackgroundColor":["#3399FF"],"surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"progressBackgroundColorRatios":[0],"propagateClick":false,"playbackBarHeadShadowBlurRadius":1.5,"progressRight":0,"playbackBarHeadShadowOpacity":0.7,"minHeight":25,"vrPointerColor":"#FFFFFF","minWidth":50,"progressBorderRadius":0,"subtitlesBottom":50,"subtitlesTop":0,"playbackBarProgressBackgroundColorRatios":[0],"surfaceReticleSelectionColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"playbackBarBorderColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","class":"ViewerArea","playbackBarHeadHeight":15,"playbackBarBorderRadius":0,"playbackBarLeft":0,"progressBarBorderColor":"#000000","subtitlesTextShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"width":"100%","toolTipFontSize":"1.11vmin","subtitlesFontSize":"3vmin","height":"100%","playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadShadow":true},{"verticalAlign":"middle","top":"0%","backgroundOpacity":0,"layout":"horizontal","id":"Container_129084CF_1C83_AF18_418C_2D8031993BE6_mobile","scrollBarWidth":5,"left":"25%","data":{"name":"Center"},"right":"25%","propagateClick":false,"minHeight":1,"children":["this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile","this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile","this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile","this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile","this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile","this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile"],"minWidth":1,"class":"Container","scrollBarColor":"#000000","height":"100%","horizontalAlign":"center","scrollBarMargin":1,"visible":false,"overflow":"scroll"},{"id":"effect_3A451B34_1C82_9908_41AD_37B1C5A316C2","duration":100,"class":"FadeOutEffect"},{"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)","iconURL":"skin/IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile.png","backgroundOpacity":0,"id":"IconButton_11F8C692_1C82_6B0B_41B2_28931AB2B43D_mobile","tabIndex":0,"data":{"name":"Previous"},"propagateClick":false,"minHeight":0,"minWidth":0,"class":"IconButton","width":46,"height":46,"horizontalAlign":"center","transparencyActive":true,"verticalAlign":"middle"},{"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_0D9B8AD4_1C86_9B08_41AD_E3E797295AC7, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0D94FAD4_1C86_9B08_41A8_2DB4814C41C5, 'hideEffect', false)}.bind(this); if(!this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile.get('visible')){ visibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile) } else { invisibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile) }","iconURL":"skin/IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile.png","backgroundOpacity":0,"id":"IconButton_1297FF98_1C82_9907_41AD_A09E1EA44354_mobile","tabIndex":0,"data":{"name":"Thumblist"},"propagateClick":false,"minHeight":0,"minWidth":0,"mode":"toggle","class":"IconButton","width":46,"height":46,"horizontalAlign":"center","transparencyActive":true,"verticalAlign":"middle"},{"initialSequence":"this.sequence_99E79E62_92EE_B384_41D2_D3B21AC91FC1","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","id":"panorama_9EE53DE7_92EF_508C_41C0_32718D553146_camera","enterPointingToHorizon":true},{"iconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile.png","backgroundOpacity":0,"id":"IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile","tabIndex":0,"data":{"name":"Zoom Out"},"propagateClick":false,"pressedIconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile_pressed.png","minHeight":0,"minWidth":0,"class":"IconButton","width":23,"height":23,"horizontalAlign":"center","transparencyActive":true,"rollOverIconURL":"skin/IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile_rollover.png","verticalAlign":"middle"},{"id":"effect_0A30489F_1C86_6738_41A8_2722230A2E2F","duration":100,"class":"FadeOutEffect"},{"iconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile.png","backgroundOpacity":0,"id":"IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile","tabIndex":0,"data":{"name":"Zoom In"},"propagateClick":false,"pressedIconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile_pressed.png","minHeight":0,"minWidth":0,"class":"IconButton","width":23,"height":23,"horizontalAlign":"center","transparencyActive":true,"rollOverIconURL":"skin/IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile_rollover.png","verticalAlign":"middle"},{"id":"ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist","items":[{"player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_9EE53DE7_92EF_508C_41C0_32718D553146_camera","media":"this.panorama_9EE53DE7_92EF_508C_41C0_32718D553146"}],"class":"PlayList"},{"iconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile.png","backgroundOpacity":0,"id":"IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile","tabIndex":0,"data":{"name":"Up"},"propagateClick":false,"pressedIconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile_pressed.png","minHeight":0,"minWidth":0,"class":"IconButton","width":23,"height":23,"horizontalAlign":"center","transparencyActive":true,"rollOverIconURL":"skin/IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile_rollover.png","verticalAlign":"middle"},{"iconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile.png","backgroundOpacity":0,"id":"IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile","tabIndex":0,"data":{"name":"Left"},"propagateClick":false,"pressedIconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile_pressed.png","minHeight":0,"minWidth":0,"class":"IconButton","width":23,"height":23,"horizontalAlign":"center","transparencyActive":true,"rollOverIconURL":"skin/IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile_rollover.png","verticalAlign":"middle"},{"selectedItemBorderSize":1.5,"itemLabelGap":4,"selectedItemLabelFontColor":"#FFFFFF","backgroundOpacity":0.9,"playList":"this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile_playlist","rollOverItemLabelFontColor":"#FFFFFF","left":"2%","data":{"name":"THUMBNAIL LIST"},"toolTipShadowColor":"#333333","right":"2%","toolTipPaddingRight":3,"toolTipTextShadowBlurRadius":1,"itemLabelTextDecoration":"none","itemLabelFontColor":"#999999","scrollBarOpacity":0,"itemThumbnailShadowBlurRadius":8,"toolTipFontColor":"#606060","toolTipPaddingLeft":3,"toolTipBorderRadius":1,"itemBackgroundColorDirection":"vertical","itemThumbnailShadowColor":"#000000","itemThumbnailWidth":120,"scrollBarColor":"#FFFFFF","toolTipShadowBlurRadius":1,"itemLabelFontStyle":"normal","itemPaddingRight":3,"toolTipTextShadowColor":"#000000","toolTipFontFamily":"Arial","selectedItemBackgroundOpacity":0.9,"paddingTop":8.5,"paddingLeft":7,"itemLabelFontSize":"9px","itemThumbnailShadow":false,"gap":5,"selectedItemBackgroundColorRatios":[0.0392156862745098],"paddingRight":7,"scrollBarWidth":2,"rollOverItemLabelFontWeight":"normal","toolTipBorderColor":"#767676","bottom":60,"itemBackgroundColorRatios":[],"id":"ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile","layout":"horizontal","tabIndex":0,"itemThumbnailScaleMode":"fit_outside","backgroundColor":["#534741"],"selectedItemBorderColor":"#FFFFFF","itemThumbnailBorderSize":0,"propagateClick":false,"itemThumbnailOpacity":1,"rollOverItemBackgroundOpacity":0,"backgroundColorRatios":[0],"minHeight":10,"itemLabelFontFamily":"Arial","itemThumbnailShadowSpread":1,"selectedItemBackgroundColor":["#534741"],"minWidth":10,"itemThumbnailBorderRadius":0,"itemThumbnailShadowOpacity":0.54,"selectedItemLabelFontWeight":"bold","toolTipBackgroundColor":"#F6F6F6","class":"ThumbnailList","itemBorderRadius":0,"height":101,"scrollBarMargin":0,"itemThumbnailHeight":70,"toolTipFontSize":6,"itemBackgroundOpacity":0,"itemPaddingTop":3,"itemPaddingBottom":3,"itemBackgroundColor":[],"itemPaddingLeft":3,"itemLabelFontWeight":"normal"},{"data":{"label":"DSCN0176 Panorama"},"vfov":180,"frames":[{"cube":{"class":"ImageResource","levels":[{"height":4608,"class":"TiledImageResourceLevel","width":27648,"tags":"ondemand","rowCount":9,"colCount":54,"url":"media/panorama_9EE53DE7_92EF_508C_41C0_32718D553146_0/{face}/0/{row}_{column}.webp"},{"height":2560,"class":"TiledImageResourceLevel","width":15360,"tags":"ondemand","rowCount":5,"colCount":30,"url":"media/panorama_9EE53DE7_92EF_508C_41C0_32718D553146_0/{face}/1/{row}_{column}.webp"},{"height":1536,"class":"TiledImageResourceLevel","width":9216,"tags":"ondemand","rowCount":3,"colCount":18,"url":"media/panorama_9EE53DE7_92EF_508C_41C0_32718D553146_0/{face}/2/{row}_{column}.webp"},{"height":1024,"class":"TiledImageResourceLevel","width":6144,"tags":"ondemand","rowCount":2,"colCount":12,"url":"media/panorama_9EE53DE7_92EF_508C_41C0_32718D553146_0/{face}/3/{row}_{column}.webp"},{"height":512,"class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"],"rowCount":1,"colCount":6,"url":"media/panorama_9EE53DE7_92EF_508C_41C0_32718D553146_0/{face}/4/{row}_{column}.webp"}]},"thumbnailUrl":"media/panorama_9EE53DE7_92EF_508C_41C0_32718D553146_t.webp","class":"CubicPanoramaFrame"}],"hfov":360,"cardboardMenu":"this.Menu_9E9365B5_92F7_708C_41D5_73C74876EA77","thumbnailUrl":"media/panorama_9EE53DE7_92EF_508C_41C0_32718D553146_t.webp","class":"Panorama","label":trans('panorama_9EE53DE7_92EF_508C_41C0_32718D553146.label'),"id":"panorama_9EE53DE7_92EF_508C_41C0_32718D553146","hfovMax":130},{"arrowKeysAction":"translate","touchControlMode":"drag_rotation","buttonMoveLeft":"this.IconButton_12B3BCE7_1C81_BF08_41BC_218123CBBD44_mobile","aaEnabled":true,"mouseControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"buttonZoomOut":"this.IconButton_138E31DC_1C9E_A93F_4194_059FF78E4793_mobile","buttonMoveRight":"this.IconButton_12D5DAF7_1C9E_BB08_416D_19DFFACBC396_mobile","class":"PanoramaPlayer","viewerArea":"this.MainViewer_mobile","buttonMoveDown":"this.IconButton_138A1D06_1C9E_7908_41BC_00628ACDA5FF_mobile","displayPlaybackBar":true,"id":"MainViewer_mobilePanoramaPlayer","buttonMoveUp":"this.IconButton_11799103_1C9E_A909_418E_09A8EA6A7B64_mobile","buttonZoomIn":"this.IconButton_12FEFBA0_1C9E_9908_41B1_DC24C660435A_mobile","buttonCardboardView":"this.IconButton_124E5997_1C81_F908_41A5_4F230AEBB3C6_mobile","gyroscopeEnabled":true},{"iconURL":"skin/IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile.png","backgroundOpacity":0,"toolTipBorderColor":"#767676","id":"IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile","tabIndex":0,"data":{"name":"fullscreen"},"maxHeight":46,"maxWidth":46,"toolTipShadowColor":"#333333","toolTipTextShadowBlurRadius":1,"propagateClick":false,"toolTipPaddingRight":3,"minHeight":1,"minWidth":1,"toolTipFontColor":"#606060","toolTipPaddingLeft":3,"toolTipBorderRadius":1,"mode":"toggle","toolTipShadowBlurRadius":1,"toolTipBackgroundColor":"#F6F6F6","class":"IconButton","toolTip":trans('IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile.toolTip'),"width":46,"height":46,"toolTipTextShadowColor":"#000000","horizontalAlign":"center","toolTipFontSize":6,"transparencyActive":true,"toolTipFontFamily":"Arial","verticalAlign":"middle"},{"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0A30489F_1C86_6738_41A8_2722230A2E2F, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_10BF264C_1C81_AB18_418E_C228A2BBA487_mobile); invisibleFunc(this.ThumbnailList_0CDB6BB1_1C82_7909_41B3_97C8C377A839_mobile); var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_3BBFCE93_1C81_BB08_4164_2A3A90EDB050, 'showEffect', false)}.bind(this); visibleFunc(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9_mobile); visibleFunc(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_mobile); visibleFunc(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0_mobile)","iconURL":"skin/IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile.png","backgroundOpacity":0,"id":"IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile","tabIndex":0,"data":{"name":"Collapse"},"propagateClick":false,"minHeight":0,"minWidth":0,"class":"IconButton","width":46,"height":46,"horizontalAlign":"center","transparencyActive":true,"verticalAlign":"middle"},{"paddingRight":5,"verticalAlign":"middle","top":"0%","backgroundOpacity":0,"layout":"horizontal","id":"Container_12A55BC8_1C86_7918_419A_38D3F8B9FF36_mobile","scrollBarWidth":5,"data":{"name":"Right"},"right":"0%","propagateClick":false,"minHeight":1,"children":["this.IconButton_138AC8EB_1C81_A718_41B9_C0E861AF42F4_mobile","this.IconButton_128BCB90_1C86_7907_41B3_46B5B135C181_mobile","this.IconButton_128B7B91_1C86_7909_41B8_9320D8E0D421_mobile"],"minWidth":1,"scrollBarColor":"#000000","class":"Container","width":"50%","height":"100%","scrollBarMargin":1,"horizontalAlign":"right","overflow":"scroll"},{"id":"MenuItem_9E8A5603_92F7_7384_41C9_4A4EE8D54383","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","class":"MenuItem","label":trans('MenuItem_9E8A5603_92F7_7384_41C9_4A4EE8D54383.label')},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_99E79E62_92EE_B384_41D2_D3B21AC91FC1"}],"class":"Player","scrollBarColor":"#000000","width":"100%","height":"100%","scrollBarMargin":2,"scripts":{"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playAudioList":TDV.Tour.Script.playAudioList,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getComponentByName":TDV.Tour.Script.getComponentByName,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setValue":TDV.Tour.Script.setValue,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlays":TDV.Tour.Script.getOverlays,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"mixObject":TDV.Tour.Script.mixObject,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"openLink":TDV.Tour.Script.openLink,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"resumePlayers":TDV.Tour.Script.resumePlayers,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"textToSpeech":TDV.Tour.Script.textToSpeech,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"downloadFile":TDV.Tour.Script.downloadFile,"historyGoForward":TDV.Tour.Script.historyGoForward,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"historyGoBack":TDV.Tour.Script.historyGoBack,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"executeJS":TDV.Tour.Script.executeJS,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPixels":TDV.Tour.Script.getPixels,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"init":TDV.Tour.Script.init,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"isPanorama":TDV.Tour.Script.isPanorama,"initQuiz":TDV.Tour.Script.initQuiz,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setMapLocation":TDV.Tour.Script.setMapLocation,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"disableVR":TDV.Tour.Script.disableVR,"toggleVR":TDV.Tour.Script.toggleVR,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"existsKey":TDV.Tour.Script.existsKey,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"createTween":TDV.Tour.Script.createTween,"enableVR":TDV.Tour.Script.enableVR,"registerKey":TDV.Tour.Script.registerKey,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getKey":TDV.Tour.Script.getKey,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMediaByName":TDV.Tour.Script.getMediaByName,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"clone":TDV.Tour.Script.clone,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"shareSocial":TDV.Tour.Script.shareSocial,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowScore":TDV.Tour.Script.quizShowScore,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizStart":TDV.Tour.Script.quizStart,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMainViewer":TDV.Tour.Script.getMainViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"showWindow":TDV.Tour.Script.showWindow,"translate":TDV.Tour.Script.translate,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizFinish":TDV.Tour.Script.quizFinish,"startMeasurement":TDV.Tour.Script.startMeasurement,"setLocale":TDV.Tour.Script.setLocale,"stopMeasurement":TDV.Tour.Script.stopMeasurement},"vrPolyfillScale":0.5,"defaultMenu":["fullscreen","mute","rotation"],"gap":10};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.7, Thu Mar 13 2025