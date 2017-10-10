var data = 2;
var total = 0;
var Length = (process.argv.length);
while (data < Length) {
    total = total + Number(process.argv[data]);
    data++;
}
console.log(total);