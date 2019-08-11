export default function fontColorDecider(colorArray)
{
    let [r,g,b] = colorArray;
    //calculating the perceptive luminance w.r.t fact that human eye loves green color
    let perceptionValue = 1 - ((0.299*r+0.587*g+0.114*b)/255);
    //if value is greater than 0.5 , put it to white else put it to black
    return (perceptionValue > 0.5 ? '#f0f0f0' : '#101010');
}