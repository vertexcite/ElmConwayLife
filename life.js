Elm.Main = Elm.Main || {};
Elm.Main.make = function (_elm) {
   "use strict";
   _elm.Main = _elm.Main || {};
   if (_elm.Main.values)
   return _elm.Main.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Main",
   $Array = Elm.Array.make(_elm),
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Graphics$Collage = Elm.Graphics.Collage.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Time = Elm.Time.make(_elm),
   $Window = Elm.Window.make(_elm);
   var colour = function (s) {
      return function () {
         switch (s.ctor)
         {case "Alive":
            return A3($Color.rgb,
              237,
              224,
              200);
            case "Dead":
            return A3($Color.rgb,
              238,
              238,
              218);}
         _E.Case($moduleName,
         "between lines 119 and 121");
      }();
   };
   var square1 = F2(function (size,
   n) {
      return function () {
         var size$ = 0.9 * $Basics.toFloat(size);
         var co = colour(n);
         return A3($Graphics$Collage.collage,
         size,
         size,
         _L.fromArray([A2($Graphics$Collage.filled,
         co,
         $Graphics$Collage.square(size$))]));
      }();
   });
   var fromMaybe = F2(function (d,
   mx) {
      return function () {
         switch (mx.ctor)
         {case "Just": return mx._0;
            case "Nothing": return d;}
         _E.Case($moduleName,
         "between lines 68 and 70");
      }();
   });
   var getStateMaybe = F3(function (x,
   y,
   g) {
      return A2($Array.get,
      x,
      A3($Array.getOrElse,
      $Array.empty,
      y,
      g));
   });
   var setState = F4(function (x,
   y,
   v,
   g) {
      return A3($Array.set,
      y,
      A2($Array.set,
      x,
      v)(A2($Array.getOrFail,y,g)),
      g);
   });
   var gridToListOfLists = function (g) {
      return A2($List.map,
      $Array.toList,
      $Array.toList(g));
   };
   var startBoardInt = $Array.fromList(_L.fromArray([$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,1
                                                                                  ,1
                                                                                  ,1
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,1
                                                                                  ,1
                                                                                  ,1
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))
                                                    ,$Array.fromList(_L.fromArray([0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0
                                                                                  ,0]))]));
   var Dead = {ctor: "Dead"};
   var getStateOrDead = F3(function (x,
   y,
   g) {
      return A2(fromMaybe,
      Dead,
      A3(getStateMaybe,x,y,g));
   });
   var Alive = {ctor: "Alive"};
   var intToState = function (n) {
      return function () {
         switch (n)
         {case 0: return Dead;
            case 1: return Alive;}
         _E.Case($moduleName,
         "between lines 54 and 56");
      }();
   };
   var startBoard = A2($Array.map,
   function (r) {
      return A2($Array.map,
      intToState,
      r);
   },
   startBoardInt);
   var dim = $Array.length(startBoard);
   var render = F2(function (_v4,
   g) {
      return function () {
         switch (_v4.ctor)
         {case "_Tuple2":
            return function () {
                 var a = gridToListOfLists(g);
                 var size = A2($Basics.min,
                 _v4._0,
                 _v4._1) / (2 * dim) | 0;
                 var f = function (r) {
                    return $Graphics$Element.flow($Graphics$Element.right)(A2($List.map,
                    square1(size),
                    r));
                 };
                 return $Graphics$Element.flow($Graphics$Element.down)(A2($List.map,
                 f,
                 a));
              }();}
         _E.Case($moduleName,
         "between lines 125 and 131");
      }();
   });
   var countLiveNeighbours = F3(function (x,
   y,
   g) {
      return function () {
         var neighCoords = _L.fromArray([{ctor: "_Tuple2"
                                         ,_0: -1
                                         ,_1: -1}
                                        ,{ctor: "_Tuple2",_0: -1,_1: 0}
                                        ,{ctor: "_Tuple2",_0: -1,_1: 1}
                                        ,{ctor: "_Tuple2",_0: 0,_1: -1}
                                        ,{ctor: "_Tuple2",_0: 0,_1: 1}
                                        ,{ctor: "_Tuple2",_0: 1,_1: -1}
                                        ,{ctor: "_Tuple2",_0: 1,_1: 0}
                                        ,{ctor: "_Tuple2"
                                         ,_0: 1
                                         ,_1: 1}]);
         var neighStates = A2($List.map,
         function (_v8) {
            return function () {
               switch (_v8.ctor)
               {case "_Tuple2":
                  return A3(getStateOrDead,
                    x + _v8._0,
                    y + _v8._1,
                    g);}
               _E.Case($moduleName,
               "on line 79, column 38 to 68");
            }();
         },
         neighCoords);
         return $List.length(A2($List.filter,
         function (s) {
            return _U.eq(s,Alive);
         },
         neighStates));
      }();
   });
   var newState = F3(function (x,
   y,
   g) {
      return function () {
         var liveNeighbours = A3(countLiveNeighbours,
         x,
         y,
         g);
         var osm = A3(getStateMaybe,
         x,
         y,
         g);
         var oldState = function () {
            switch (osm.ctor)
            {case "Just": return osm._0;}
            _E.Case($moduleName,
            "between lines 87 and 90");
         }();
         return function () {
            switch (oldState.ctor)
            {case "Alive":
               return _U.cmp(liveNeighbours,
                 2) < 0 || _U.cmp(liveNeighbours,
                 3) > 0 ? Dead : Alive;
               case "Dead":
               return _U.eq(liveNeighbours,
                 3) ? Alive : Dead;}
            _E.Case($moduleName,
            "between lines 92 and 94");
         }();
      }();
   });
   var update = F2(function (_v15,
   grid) {
      return function () {
         return function () {
            var f2 = F3(function (y,
            x,
            oldState) {
               return A3(newState,x,y,grid);
            });
            var f1 = F2(function (y,
            oldRow) {
               return A2($Array.indexedMap,
               f2(y),
               oldRow);
            });
            return A2($Array.indexedMap,
            f1,
            grid);
         }();
      }();
   });
   var main = A2($Signal._op["~"],
   A2($Signal._op["<~"],
   render,
   $Window.dimensions),
   A3($Signal.foldp,
   update,
   startBoard,
   $Time.every(500)));
   _elm.Main.values = {_op: _op
                      ,Alive: Alive
                      ,Dead: Dead
                      ,startBoardInt: startBoardInt
                      ,dim: dim
                      ,startBoard: startBoard
                      ,intToState: intToState
                      ,gridToListOfLists: gridToListOfLists
                      ,setState: setState
                      ,getStateMaybe: getStateMaybe
                      ,fromMaybe: fromMaybe
                      ,getStateOrDead: getStateOrDead
                      ,countLiveNeighbours: countLiveNeighbours
                      ,newState: newState
                      ,update: update
                      ,square1: square1
                      ,colour: colour
                      ,render: render
                      ,main: main};
   return _elm.Main.values;
};