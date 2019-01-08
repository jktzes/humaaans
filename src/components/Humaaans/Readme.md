### Default
The default human is standing towards right, with a width of 380 pixels and a height of 480 pixels. 

### Sizing
The height will be computed based on posture(sitting or standing) and width, which is indentical to the value of size prop.

|Position|Height-to-width Ratio|
|--------|-----|
|Standing|<center>24/19</center>|
|Sitting |<center>20/19</center>|

### Component List

|Body Parts|Options|
|----------|------------------------------------------------------------------------------------------------------------------|
|Head| Afro Airy Caesar Chongo Curly Hijab Hijab2 Long NoHair Pony Rad Short Short2 ShortBeard Top Turban1 Turban2 Wavy|
|Torso| Hoodie Jacket Jacket2 LabCoat LongSleeve PointingForward PointingUp Pregnant TrenchCoat TurtleNeck               |
|Sitting| BaggyPants SkinnyJeans SweatPants Wheelchair                                                                     |
|Standing| BaggyPants Jogging Shorts SkinnyJeans SkinnyJeansWalk Skirt Sprint SweatPants                                    |

### Face to face humans:
```
<Human posture="sitting" size="300" direction="right" head="Afro" torso="Hoodie" bottom="SkinnyJeans" />
<Human posture="standing" size="300" direction="left" head="Airy" torso="Jacket" bottom="Jogging"  />
```
### A sitting human:
```
<Human posture="sitting" size="300" head="Curly" torso="TrenchCoat" bottom="BaggyPants" />
```
### A standing human:
```
<Human size="300" head="ShortBeard" torso="TurtleNeck" bottom="SweatPants" />
```
### A human with wheels:
```
<Human posture="sitting" size="300" head="Turban" torso="LongSleeve" bottom="Wheelchair" />
```

