
import $ from 'jquery';

var $musicBody = $('.music-body');
var $audioContainer = $('.audio-container');
var $startAnimation = $('.start-animation');
var $clickToStart = $('.click-to-start');
var $note = $(".note");
var $bass = $('.bass');
var $offBass = $('.off-bass');
var $boop = $('.boop');
var $snare = $('.snare');
var $flik1 = $('.flik1');
var $flik2 = $('.flik2');
var $flik3 = $('.flik3');
var $ting = $('.ting');
var $lyricA = $('.lyric-a');
var $lyricB = $('.lyric-b');
var $lyricC = $('.lyric-c');
var $lyricD = $('.lyric-d');
var $lyricE = $('.lyric-e');
var $lyricF = $('.lyric-f');
var $lyricG = $('.lyric-g');
var $lyricH = $('.lyric-h');
var lyricIn = 600;
var lyricOut = 1000;
var lyricDelay = 320;
var chorusOut = 2000;
var chorusDelay = 1000;
var leftBridge = 40;
var topBridge = 30;
var lineShift = 0;
var topBridgeShift = 40;
var leftChorus = 400;
var topChorus = 200;
var topChorusShift = 40;
var chorusSpacing = 10;
var charWidth = 20;
var startLyrics = 24000;
var noteShift = 30;
var noteFade = 187.5;
var noteTimer = 72180;
var noteLeft;
var noteTop;
var boopHit;
var flik1Hit;
var flik2Hit;
var flik3Hit;
var tingHit;
var snareHit;
var bassHit;
var xlocation;
var ylocation;
var counter = 1;

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    xlocation = Math.random()*1000;
    ylocation = Math.random()*400;
    $startAnimation.fadeIn(1500).css({left: xlocation, top: ylocation});
    $startAnimation.fadeOut(1500);

    var startDisplay = setInterval(function() {
      xlocation = Math.random()*1000;
      ylocation = Math.random()*400;
      $startAnimation.fadeIn(1500).css({left: xlocation, top: ylocation});
      $startAnimation.fadeOut(1500);
      counter += 1;
      if (counter === 20) {
        clearInterval(startDisplay);
        counter = 1;
      }
    }, 3000);

    $clickToStart.click(function(){
      $('<audio>').attr({
      'src': '/images/Black Mambo.m4a',
      'volume': 1.0,
      'controls': true,
      'autoplay': 'autoplay'
      }).appendTo($audioContainer);
      $startAnimation.css({display: 'none'});
      clearInterval(startDisplay);

      setTimeout(function(){
        $boop.animate({fontSize: '150px'}, 200);
        $boop.animate({fontSize: '0px'}, 200);
        boopHit = setInterval(function() {
          $boop.animate({fontSize: '150px'}, 200);
          $boop.animate({fontSize: '0px'}, 200);
        }, 3000);
      }, 160);

      setTimeout(function(){
        $flik1.animate({fontSize: '75px'}, 200);
        $flik1.animate({fontSize: '0px'}, 200);
        flik1Hit = setInterval(function() {
          $flik1.animate({fontSize: '75px'}, 200);
          $flik1.animate({fontSize: '0px'}, 200);
        }, 3000);
      }, 910);

      setTimeout(function(){
        $flik2.animate({fontSize: '75px'}, 200);
        $flik2.animate({fontSize: '0px'}, 200);
        flik2Hit = setInterval(function() {
          $flik2.animate({fontSize: '75px'}, 200);
          $flik2.animate({fontSize: '0px'}, 200);
        }, 3000);
      }, 1285);

      setTimeout(function(){
        $flik3.animate({fontSize: '75px'}, 200);
        $flik3.animate({fontSize: '0px'}, 200);
        flik3Hit = setInterval(function() {
          $flik3.animate({fontSize: '75px'}, 200);
          $flik3.animate({fontSize: '0px'}, 200);
        }, 3000);
      }, 1660);

      setTimeout(function(){
        $ting.animate({fontSize: '30px'}, 200);
        $ting.animate({fontSize: '0px'}, 200);
        tingHit = setInterval(function() {
          $ting.animate({fontSize: '30px'}, 200);
          $ting.animate({fontSize: '0px'}, 200);
        }, 3000);
      }, 2250);

      setTimeout(function(){
        snareHit = setInterval(function() {  
          $snare.animate({fontSize: '150px'}, 200);
          $snare.animate({fontSize: '0px'}, 200);
        }, 1500);
      }, 9800);

      setTimeout(function(){
        bassHit = setInterval(function() {
          $bass.animate({fontSize: '150px'}, 200);
          $bass.animate({fontSize: '0px'}, 200);
          $bass.delay(3000*(2.5/4)-400);
          $bass.animate({fontSize: '150px'}, 200);
          $bass.animate({fontSize: '0px'}, 200);
        }, 3000);
      }, 8900);

      setTimeout(function(){
        $offBass.animate({fontSize: '150px'}, 200);
        $offBass.animate({fontSize: '0px'}, 200);
        $offBass.delay(3000*2-400);
        $offBass.animate({fontSize: '150px'}, 200);
        $offBass.animate({fontSize: '0px'}, 200);
        $offBass.delay(3000*4-400);
        $offBass.animate({fontSize: '150px'}, 200);
        $offBass.animate({fontSize: '0px'}, 200);
        $offBass.delay(3000*3-400);
        $offBass.animate({fontSize: '150px'}, 200);
        $offBass.animate({fontSize: '0px'}, 200);
        $offBass.delay(3000*2.75-400);
        $offBass.animate({fontSize: '150px'}, 200);
        $offBass.animate({fontSize: '0px'}, 200);
        $offBass.delay(3000*0.25-400);
        $offBass.animate({fontSize: '150px'}, 200);
        $offBass.animate({fontSize: '0px'}, 200);
        $offBass.delay(3000*6-400);
        $offBass.animate({fontSize: '150px'}, 200);
        $offBass.animate({fontSize: '0px'}, 200);
      }, 11500);

    // Bridge 1
      setTimeout(function(){
        $lyricA
          .html("What'll")
          .css({
            "left": leftBridge,
            "top": topBridge
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricB
          .delay(lyricDelay)
          .html("it")
          .css({
            "left": leftBridge + charWidth * 9,
            "top": topBridge
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricC
          .delay(lyricDelay*2)
          .html("be")
          .css({
            "left": leftBridge + charWidth * 12,
            "top": topBridge
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricD
          .delay(lyricDelay*8.4)
          .html("now")
          .css({
            "left": leftBridge + charWidth * 15,
            "top": topBridge
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricE
          .delay(lyricDelay*9.5)
          .html("mister")
          .css({
            "left": leftBridge + charWidth * 20.5,
            "top": topBridge
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricF
          .delay(lyricDelay*10.9)
          .html("mole")
          .css({
            "left": leftBridge + charWidth * 28.2,
            "top": topBridge
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
      }, startLyrics);
      
      setTimeout(function(){
        $lyricA
          .html("Whispers")
          .css({
            "left": leftBridge + lineShift,
            "top": topBridge + topBridgeShift
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricB
          .delay(lyricDelay*1.5)
          .html("sloth")
          .css({
            "left": leftBridge + lineShift + charWidth * 10.6,
            "top": topBridge + topBridgeShift,
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricC
          .delay(lyricDelay*7.5)
          .html("in")
          .css({
            "left": leftBridge + lineShift + charWidth * 17,
            "top": topBridge + topBridgeShift
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricD
          .delay(lyricDelay*9.5)
          .html("curls")
          .css({
            "left": leftBridge + lineShift + charWidth * 20,
            "top": topBridge + topBridgeShift
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricE
          .delay(lyricDelay*10.5)
          .html("of")
          .css({
            "left": leftBridge + lineShift + charWidth * 26.1,
            "top": topBridge + topBridgeShift
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricF
          .delay(lyricDelay*11.5)
          .html("smoke")
          .css({
            "left": leftBridge + lineShift + charWidth * 29.5,
            "top": topBridge + topBridgeShift
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
      }, startLyrics + 6000);

      setTimeout(function(){
        $lyricA
          .html("Take")
          .css({
            "left": leftBridge + lineShift * 2,
            "top": topBridge + topBridgeShift * 2
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricB
          .delay(lyricDelay*0.6)
          .html("a")
          .css({
            "left": leftBridge + lineShift * 2 + charWidth * 6,
            "top": topBridge + topBridgeShift * 2,
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricC
          .delay(lyricDelay*1.2)
          .html("back")
          .css({
            "left": leftBridge + lineShift * 2 + charWidth * 8.2,
            "top": topBridge + topBridgeShift * 2
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricD
          .delay(lyricDelay*2)
          .html("seat")
          .css({
            "left": leftBridge + lineShift * 2 + charWidth * 14.4,
            "top": topBridge + topBridgeShift * 2
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricE
          .delay(lyricDelay*8)
          .html("or")
          .css({
            "left": leftBridge + lineShift * 2 + charWidth * 20.2,
            "top": topBridge + topBridgeShift * 2
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricF
          .delay(lyricDelay*9.4)
          .html("play")
          .css({
            "left": leftBridge + lineShift * 2 + charWidth * 23.5,
            "top": topBridge + topBridgeShift * 2
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricG
          .delay(lyricDelay*10.5)
          .html("pharaoh")
          .css({
            "left": leftBridge + lineShift * 2 + charWidth * 29.2,
            "top": topBridge + topBridgeShift * 2
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
      }, startLyrics + 11500);

      setTimeout(function(){
        $lyricA
          .html("Dance")
          .css({
            "left": leftBridge + lineShift * 3,
            "top": topBridge + topBridgeShift * 3
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricB
          .delay(lyricDelay)
          .html("with")
          .css({
            "left": leftBridge + lineShift * 3 + charWidth * 8,
            "top": topBridge + topBridgeShift * 3,
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricC
          .delay(lyricDelay*2)
          .html("me")
          .css({
            "left": leftBridge + lineShift * 3 + charWidth * 13.6,
            "top": topBridge + topBridgeShift * 3
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricD
          .delay(lyricDelay*7.5)
          .html("and")
          .css({
            "left": leftBridge + lineShift * 3 + charWidth * 17.6,
            "top": topBridge + topBridgeShift * 3
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricE
          .delay(lyricDelay*9)
          .html("shake")
          .css({
            "left": leftBridge + lineShift * 3 + charWidth * 22.6,
            "top": topBridge + topBridgeShift * 3
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricF
          .delay(lyricDelay*10)
          .html("your")
          .css({
            "left": leftBridge + lineShift * 3 + charWidth * 29.8,
            "top": topBridge + topBridgeShift * 3
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
        $lyricG
          .delay(lyricDelay*11)
          .html("bones")
          .css({
            "left": leftBridge + lineShift * 3 + charWidth * 36,
            "top": topBridge + topBridgeShift * 3
          })
          .fadeIn(lyricIn)
          .fadeOut(lyricOut);
      }, startLyrics + 18000);

    // Chorus
      setTimeout(function(){
        $lyricA
          .html("Slow down")
          .css({
            "left": leftChorus,
            "top": topChorus,
            "word-spacing": chorusSpacing
          })
          .fadeIn(lyricIn)
          .fadeOut(chorusOut);
        $lyricB
          .delay(chorusDelay*2.3)
          .html("It's a science")
          .css({
            "left": leftChorus,
            "top": topChorus + topChorusShift,
            "word-spacing": chorusSpacing
          })
          .fadeIn(lyricIn)
          .fadeOut(chorusOut);
        $lyricC
          .delay(chorusDelay*5)
          .html("He's been waiting to").css({
            "left": leftChorus,
            "top": topChorus + topChorusShift * 2,
            "word-spacing": chorusSpacing
          }).fadeIn(lyricIn*2)
          .fadeOut(chorusOut * 1.5);
        $lyricD.delay(chorusDelay*9)
          .html("Bring you down").css({
            "left": leftChorus,
            "top": topChorus + topChorusShift * 3,
            "word-spacing": chorusSpacing
          }).fadeIn(lyricIn)
          .fadeOut(chorusOut);
        $lyricE.delay(chorusDelay*12)
          .html("Snake eyed").css({
            "left": leftChorus,
            "top": topChorus + topChorusShift * 4,
            "word-spacing": chorusSpacing
          }).fadeIn(lyricIn)
          .fadeOut(chorusOut);
        $lyricF.delay(chorusDelay*14)
          .html("With a sly smile").css({
            "left": leftChorus,
            "top": topChorus + topChorusShift * 5,
            "word-spacing": chorusSpacing
          }).fadeIn(lyricIn*1.5)
          .fadeOut(chorusOut);
        $lyricG.delay(chorusDelay*17.5)
          .html("He can hold you").css({
            "left": leftChorus,
            "top": topChorus + topChorusShift * 6,
            "word-spacing": chorusSpacing
          }).fadeIn(lyricIn)
          .fadeOut(chorusOut);
        $lyricH.delay(chorusDelay*20.5)
          .html("And shake your child").css({
            "left": leftChorus,
            "top": topChorus + topChorusShift * 7,
            "word-spacing": chorusSpacing
          }).fadeIn(lyricIn)
          .fadeOut(chorusOut*1.5);
      }, startLyrics + 24000);

      setTimeout(function(){
        clearInterval(boopHit);
        clearInterval(flik1Hit);
        clearInterval(flik2Hit);
        clearInterval(flik3Hit);
        clearInterval(tingHit);
        clearInterval(snareHit);
        clearInterval(bassHit);
        for (var noteCounter = 0; noteCounter < 4; noteCounter++) {
          noteLeft = 800;
          noteTop = 250;
          $note   
            .animate({left: noteLeft, top: noteTop}, 200)
            .animate({opacity: 1}, 0)
            .animate({opacity: 0}, 175)
            .animate({left: noteLeft += noteShift, top: noteTop += noteShift}, 200)
            .animate({opacity: 1}, 0)
            .animate({opacity: 0}, 175)
            .animate({left: noteLeft += noteShift, top: noteTop += noteShift}, 200)
            .animate({opacity: 1}, 0)
            .animate({opacity: 0}, 175)
            .animate({left: noteLeft += noteShift, top: noteTop += noteShift}, 200)
            .animate({opacity: 1}, 0)
            .animate({opacity: 0}, 175)
            .animate({left: noteLeft += noteShift, top: noteTop += noteShift}, 200)
            .animate({opacity: 1}, 0)
            .animate({opacity: 0}, 175/2)
            .animate({left: noteLeft += noteShift, top: noteTop -= noteShift}, 100)
            .animate({opacity: 1}, 0)
            .animate({opacity: 0}, 175/2)
            .animate({left: noteLeft += noteShift, top: noteTop += noteShift}, 100)
            .animate({opacity: 1}, 0)
            .animate({opacity: 0}, 175)
            .animate({left: noteLeft += noteShift, top: noteTop += noteShift}, 200)
            .animate({opacity: 1}, 0)
            .animate({opacity: 0}, 175)
            .animate({left: noteLeft += noteShift, top: noteTop += noteShift}, 200)
            .animate({opacity: 1}, 0)
            .animate({opacity: 0}, 175);
        };
      }, startLyrics + 47800);

      setTimeout(function(){
        $audioContainer.empty();
      }, startLyrics + 60000);
    });
  }
};

module.exports = app;
