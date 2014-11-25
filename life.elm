import Graphics.Element as G
import Window           as W
import Array as A
---
data State = Alive | Dead

type Grid       = A.Array (A.Array State)
type Dimensions = (Int,Int)

-- | Starting board
startBoardInt : A.Array (A.Array Int)
startBoardInt = 
  A.fromList [
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    A.fromList[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]

dim : Int
dim = A.length startBoard

startBoard : Grid
startBoard = A.map (\r -> A.map intToState r) startBoardInt

intToState : Int -> State
intToState n = 
  case n of
    0 -> Dead
    1 -> Alive

gridToListOfLists : Grid -> [[State]]
gridToListOfLists g = map A.toList (A.toList g)

setState : Int -> Int -> State -> Grid -> Grid
setState x y v g = A.set y (A.set x v <| A.getOrFail y g) g

getStateMaybe : Int -> Int -> Grid -> Maybe State
getStateMaybe x y g = A.get x (A.getOrElse A.empty y g)

fromMaybe : a -> Maybe a -> a
fromMaybe d mx = case mx of
  Just x  -> x
  Nothing -> d

getStateOrDead : Int -> Int -> Grid -> State
getStateOrDead x y g = fromMaybe Dead (getStateMaybe x y g)

countLiveNeighbours : Int -> Int -> Grid -> Int
countLiveNeighbours x y g = 
 let
    neighCoords = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
    neighStates = map ( \ (dx,dy) -> getStateOrDead (x+dx) (y+dy) g) neighCoords
 in length <| filter (\s -> s == Alive) neighStates

newState : Int -> Int -> Grid -> State
newState x y g = 
  let 
    osm = getStateMaybe x y g
    oldState = 
      case osm of 
        Just os -> os
    -- if osm is Nothing then crash
    liveNeighbours = countLiveNeighbours x y g
  in
    case oldState of
      Alive -> if (liveNeighbours < 2 || liveNeighbours > 3) then Dead else Alive
      Dead  -> if (liveNeighbours == 3) then Alive else Dead

update : Time -> Grid -> Grid
update _ grid = 
  let
    f2 : Int -> Int -> State  -> State
    f2 y x oldState = newState x y grid
    f1 : Int -> A.Array State  -> A.Array State 
    f1 y oldRow = A.indexedMap (f2 y) oldRow 
  in A.indexedMap f1 grid

-- | RENDERING
-- Reference:
-- collage : Int -> Int -> [Form] -> Element
-- flow : Direction -> [Element] -> Element


square1 : Int -> State -> Element
square1 size n =
    let co = colour n
        size' = (0.9 * toFloat size)
    in collage size size [filled co (square size')]

-- | Yields a colour based on State rank.
colour : State -> Color
colour s = case s of
 Dead  -> rgb 238 238 218
 Alive -> rgb 237 224 200

render : Dimensions -> Grid -> Element
render (w,h) g = 
  let 
    f : [State] -> Element
    f r = flow G.right <| map (square1 size) r
    size  = (min w h // (2 * dim)) 
    a = gridToListOfLists g
  in 
    flow G.down <| map f a

main : Signal Element
main = render <~ W.dimensions ~ (foldp update startBoard (every 500))