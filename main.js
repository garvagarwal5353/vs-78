var images=
["https://media.istockphoto.com/vectors/cartoon-father-and-son-playing-together-vector-id628033900","https://media.istockphoto.com/vectors/mother-and-child-mom-hugging-her-daughter-with-a-lot-of-love-and-vector-id1264958971","https://image.shutterstock.com/image-vector/cartoon-older-brother-his-younger-600w-1309568989.jpg","https://latestnews.fresherslive.com/images/articles/origin/2021/04/28/you-caught-me-first-at-home-riddle-6088f7c545cc6-1619589061.jpg"];
var names=
[sachin agarwal,pinky agarwal,aaryan agarwal,garv agarwal];
var i=0;
function update()
{
    i++;
    var next_member_in_array=5
    if(i > next_member_in_array)
    {
        i = 0
    }
    var updatedImage= images[i];
    var updatedname= names[i];
    document.getElementById("nextimg").src=updatedImage
    document.getElementById("nextmember").src=updatedname
}
