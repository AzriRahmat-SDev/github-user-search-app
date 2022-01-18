function calculateAvgMarks() {
	var class_1 = [86, 80, 75, 82, 80, 70];
	var class_2 = [40, 55, 60, 48, 50];
	var class_3 = [90, 85, 30, 86, 78, 75, 54];

	var classes = [class_1, class_2, class_3];
	for (var class_object = 0; class_object < classes.length; class_object++) {
		//accessing objects in classes array which is named class_1, class_2, class_3
		var totalMarks = 0;
		//mutable variable declared before the start of the loop.
		//classes[class_object].length aka classes[0].length aka class_1.length is 6
		for (var i = 0; i < classes[class_object].length; i++) {
			//the first iteration of the loop will be pointing to the value of class_1[0] till class_1[5] and summing them up
			totalMarks += classes[class_object][i];
		}
		//at the end of the loop within the each class iteration it will display the average
		console.log(
			`Average Mark for Class ${class_object + 1} is ` +
				(totalMarks / classes[class_object].length).toFixed(2)
		);
	}
}

calculateAvgMarks();
