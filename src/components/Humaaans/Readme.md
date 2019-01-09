```
<Human posture="sitting" size={300} direction="right" head="Afro" torso="Hoodie" bottom="SkinnyJeans" />
<Human posture="standing" size={300} direction="left" head="Airy" torso="Jacket" bottom="Jogging"  />
```
### Component List

|Body Parts|Options|
|----------|------------------------------------------------------------------------------------------------------------------|
|Head| Afro Airy Caesar Chongo Curly Hijab Hijab2 Long NoHair Pony Rad Short Short2 ShortBeard Top Turban1 Turban2 Wavy|
|Torso| Hoodie Jacket Jacket2 LabCoat LongSleeve PointingForward PointingUp Pregnant TrenchCoat TurtleNeck               |
|Bottom(sitting)| BaggyPants SkinnyJeans SweatPants Wheelchair                                                                     |
|Bottom(standing)| BaggyPants Jogging Shorts SkinnyJeans SkinnyJeansWalk Skirt Sprint SweatPants                                    |

### A Default Human 
The default human is standing towards right, with a width of 380 pixels and a height of 480 pixels. 
```
<Human head="ShortBeard" torso="TurtleNeck" bottom="SweatPants" />
```
### Size Matters
The height will be computed based on posture(sitting or standing) and width, which is indentical to the value of size prop.

|Posture|Height-to-width Ratio|
|--------|-----|
|Standing|<center>24/19</center>|
|Sitting |<center>20/19</center>|

```
<Human posture="sitting" size={100} head="Curly" torso="TurtleNeck" bottom="SkinnyJeans" />
<Human posture="sitting" size={150} head="Curly" torso="TurtleNeck" bottom="SkinnyJeans" />
<Human posture="sitting" size={200} head="Curly" torso="TurtleNeck" bottom="SkinnyJeans" />
<Human posture="standing" size={200} head="Curly" torso="TurtleNeck" bottom="SkinnyJeans" />
```
