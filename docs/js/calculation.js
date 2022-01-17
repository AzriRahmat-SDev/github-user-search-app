function calculateAvgMarks() {
	var class_1 = [86, 80, 75, 82, 80, 70];
	var class_2 = [40, 55, 60, 48, 50];
	var class_3 = [90, 85, 30, 86, 78, 75, 54];

	var marks_list = [class_1, class_2, class_3];
	for (
		var class_list_index = 0;
		class_list_index < marks_list.length;
		class_list_index++
	) {
		//accessing objects in marks_list array which is named class_1, class_2, class_3
		var totalMarks = 0;
		//mutable variable declared in the start of the loop.
		for (var i = 0; i < class_list_index[i].length; i++) {
			//for each iteration of this loop class_list_index[i] it will show class_1[0] to class_1[1] till the end of the length.
			totalMarks += class_list_index[i];
		}
		//at the end of the loop within the each class iteration it will display the average
		console.log(
			`Average Mark for ${class_list_index} is ` +
				totalMarks / class_list_index.length
		);
	}

	return 1;
}
