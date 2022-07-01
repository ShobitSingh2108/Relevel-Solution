function Min(arr)
{
Mivalue=arr[0];
for(i=0;i<=arr.length-1;i++)
{
    if(arr[i]<MinValue)
    {
      MinValue=arr[i];
    }
}
console.log(MinValue);
}

Min(arr[10]);