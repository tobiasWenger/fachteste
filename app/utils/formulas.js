const generic = (female, male, points, f1, f2, m1, m2) => {
	const d = parseFloat(points);
	const m = parseFloat(male);
	const f = parseFloat(female);

	const markF = (d + f1) / (f2);
	const markM = (d + m1) / (m2);

	let mark = (m * markM + f * markF) / (m + f);

	if (mark < 3) {
		mark = 3;
	} else if (mark > 10) {
		mark = 10;
	}

	return mark;
};


export default {
  allround: {
    task1: (female, male, points) => {
      const f1 = 75;
      const f2 = 15.8;
      const m1 = 26;
      const m2 = 13.5;

      return generic(female, male, points, f1, f2, m1, m2);
    },

    task2: (female, male, points) => {
      const f1 = -18;
      const f2 = 14;
      const m1 = -61;
      const m2 = 15.4;

      return generic(female, male, points, f1, f2, m1, m2);
    }
  },

  korbball: {
    task1: (female, male, points) => {
      const f1 = 31;
      const f2 = 9.6;
      const m1 = 30;
      const m2 = 10.4;

      return generic(female, male, points, f1, f2, m1, m2);
    },

    task2: (female, male, points) => {
      const f1 = -41;
      const f2 = 9.4;
      const m1 = -11;
      const m2 = 16.4;

      return generic(female, male, points, f1, f2, m1, m2);
    }
  },

  unihockey: {
    task1: (female, male, points) => {
      const f1 = 21;
      const f2 = 6.1;
      const m1 = 8;
      const m2 = 6;

      return generic(female, male, points, f1, f2, m1, m2);
    },

    task2: (female, male, points) => {
      const f1 = 39;
      const f2 = 8.4;
      const m1 = 15;
      const m2 = 8;

      return generic(female, male, points, f1, f2, m1, m2);
    }
  },

  volleyball: {
    task1: (female, male, points) => {
      const f1 = 16;
      const f2 = 14.2;
      const m1 = 3;
      const m2 = 15.2;

      return generic(female, male, points, f1, f2, m1, m2);
    },

    task2: (female, male, points) => {
      const f1 = 23;
      const f2 = 23;
      const m1 = -45;
      const m2 = 20.9;

      return generic(female, male, points, f1, f2, m1, m2);
   }
  },
};
