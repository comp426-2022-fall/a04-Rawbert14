export function roll(sides, dice, rolls)
{
    let result = [];

    for(let i = 0; i < rolls; i++)
    {
	result.push(Math.floor(Math.random() * ((dice * sides + 1) - 1) + 1));
    }
    var r = {
	sides: parseInt(sides),
	dice: parseInt(dice),
	rolls: parseInt(rolls),
	result: result
    }
    return JSON.stringify(r);
}
