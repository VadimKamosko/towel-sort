
// You should implement your task here.

module.exports = function towelSort (mas) {
   if(!mas) return [];
   let i=0;
    for (val of mas)
    {
        if(i%2==1)
        {
            val.reverse();
        }
        i++;
    }
    return mas.flat();
}
