function indexOfIgnoreCase(s1, s2) {
	let t1 = s1.toLowerCase();
	let t2 = s2.toLowerCase();

	return t1.indexOf(t2)
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
