# DeltaDungeon

Project submission at commit: [452257c][Commit]

Project [Report]

This project uses the [DeltaBlock] extension to execute additional scripts (this project) in mblock.

[DeltaBlock]: https://github.com/DeltaBlock/DeltaBlock
[Report]: https://github.com/JDK-Delta/DeltaDungeon/blob/main/Report.pdf
[Commit]: https://github.com/JDK-Delta/DeltaDungeon/commit/452257c581f98641544553274be35202f8de2a1c


## General Structure

The project uses an entity rendering system, whereas the entities are stored inside a world object.

### Description of Classes

[Entity]: /source/entity/Entity.js

[Item]: /source/entity/general/Item.js
[Player]: /source/entity/general/Player.js
[Tile]: /source/entity/general/Tile.js

[Door]: /source/entity/interactive/Door.js
[Goal]: /source/entity/interactive/Goal.js

[Controls]: /source/mechanic/Controls.js
[Keys]: /source/mechanic/Keys.js
[Position]: /source/mechanic/Position.js
[Renderer]: /source/mechanic/Renderer.js
[World]: /source/mechanic/World.js

[Items]: /source/world/Items.js

[Game]: /source/Game.js


|     Class     | Description |
|:-------------:|-------------|
|     [Entity]    | The base class for all entities.<br>Contains:<br>`- Position` \<[Position]\> <br>`- Rotation` \<Int\> <br>`- World` \<[World]\> <br>`- Type` \<String\> |
| [World] | Represents a level, manages entities.<br>Contains:<br>`- Entities` \<Map\<[Entity]\>\> <br>`- Tiles` \<Map\<[Entity]\>\> |
| [Items] | List of predefined items, such as keys. |
| [Renderer] | Renders entities of the current world object to the canvas, can be paused as well as completely removed. Currently doesn't support frame based rendering timings |
| [Position] | A location in x-dimensional space, no axis limit. |
| [Keys] | Manages the collected keys, updates indicator data accordingly. |
| [Controls] | Listens to the 'update_controls' event, decodes<br>the data and calls direction / key events accordingly. |
| [Game] | Contains setup functionality such as level construction and [Controls] registration. |
| [Item] | A collectible item.<br><br>Based on [Entity].<br><br>Contains:<br> `- Name` \<String\><br>`- Color` \<String\><br>`- Action` \<Function\><br><br>Data is collected from the [Items] list via the specified `item-id`. |
| [Player] | The player character.<br><br>Based on [Entity]. |
| [Tile] | A wall / floor tile.<br><br>Based on [Entity].<br><br>Contains:<br>`- Solid` \<Boolean\><br>`- Neighbours` \<Array\><br><br> Renders connected / smoothened walls by checking for surrounding tiles. |
| [Door] | An interactive door.<br><br>Based on [Entity].<br><br>Contains:<br>`- Key` \<String\><br>`- Solid` \<Boolean\><br>`- Color` \<String\><br>`- Interactive` \<Boolean\><br><br>Renders based on it's rotation vertically or horizontally. |
| [Goal] | Interactive target to finish a level.<br><br>Based on [Entity].<br><br>Contains:<br>`- Interactive` \<Boolean\><br>`- Solid` \<Boolean\><br>`- Anim` \<Int\><br><br>Renders as a pulsating rectangle. |
