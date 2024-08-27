export let role = 'admin';

export const menuItems = [
  {
    title: 'MENU',
    items: [
      {
        icon: '/home.png',
        label: 'Home',
        href: '/',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/teacher.png',
        label: 'Teachers',
        href: '/list/teachers',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/student.png',
        label: 'Students',
        href: '/list/students',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/parent.png',
        label: 'Parents',
        href: '/list/parents',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/subject.png',
        label: 'Subjects',
        href: '/list/subjects',
        visible: ['admin'],
      },
      {
        icon: '/class.png',
        label: 'Classes',
        href: '/list/classes',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/lesson.png',
        label: 'Lessons',
        href: '/list/lessons',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/exam.png',
        label: 'Exams',
        href: '/list/exams',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/assignment.png',
        label: 'Assignments',
        href: '/list/assignments',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/result.png',
        label: 'Results',
        href: '/list/results',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/attendance.png',
        label: 'Attendance',
        href: '/list/attendance',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/calendar.png',
        label: 'Events',
        href: '/list/events',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/message.png',
        label: 'Messages',
        href: '/list/messages',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/announcement.png',
        label: 'Announcements',
        href: '/list/announcements',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
    ],
  },
  {
    title: 'OTHER',
    items: [
      {
        icon: '/profile.png',
        label: 'Profile',
        href: '/profile',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/setting.png',
        label: 'Settings',
        href: '/settings',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/logout.png',
        label: 'Logout',
        href: '/logout',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
    ],
  },
];

export const countChartData = [
  {
    name: 'Boys',
    count: 53,
    fill: '#fae27c',
  },

  {
    name: 'Girls',
    count: 47,
    fill: '#cfceff',
  },
  {
    name: 'Total',
    count: 100,
    fill: '#fff',
  },
];

export const barChartData = [
  {
    name: 'Sunday',
    present: 77,
    absent: 23,
  },
  {
    name: 'Monday',
    present: 59,
    absent: 41,
  },
  {
    name: 'Tuesday',
    present: 76,
    absent: 34,
  },
  {
    name: 'Wednesday',
    present: 80,
    absent: 20,
  },
  {
    name: 'Thrusday',
    present: 54,
    absent: 46,
  },
];

export const financeChartData = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,
  },
  {
    name: 'Apr',
    income: 2780,
    expense: 3908,
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800,
  },
  {
    name: 'Jun',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'Jul',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Aug',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Sep',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Oct',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Nov',
    income: 3490,
    expense: 4300,
  },
  {
    name: 'Dec',
    income: 3490,
    expense: 4300,
  },
];

export const eventsData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor',
    time: '12:00 PM - 2:00 PM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export const calendarEvents = [
  {
    title: 'Math',
    allDay: false,
    start: new Date(2024, 7, 12, 8, 0),
    end: new Date(2024, 7, 12, 8, 45),
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2024, 7, 12, 9, 0),
    end: new Date(2024, 7, 12, 9, 45),
  },
  {
    title: 'Biology',
    allDay: false,
    start: new Date(2024, 7, 12, 10, 0),
    end: new Date(2024, 7, 12, 10, 45),
  },
  {
    title: 'Physics',
    allDay: false,
    start: new Date(2024, 7, 12, 11, 0),
    end: new Date(2024, 7, 12, 11, 45),
  },
  {
    title: 'Chemistry',
    allDay: false,
    start: new Date(2024, 7, 12, 13, 0),
    end: new Date(2024, 7, 12, 13, 45),
  },
  {
    title: 'History',
    allDay: false,
    start: new Date(2024, 7, 12, 14, 0),
    end: new Date(2024, 7, 12, 14, 45),
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2024, 7, 13, 9, 0),
    end: new Date(2024, 7, 13, 9, 45),
  },
  {
    title: 'Biology',
    allDay: false,
    start: new Date(2024, 7, 13, 10, 0),
    end: new Date(2024, 7, 13, 10, 45),
  },
  {
    title: 'Physics',
    allDay: false,
    start: new Date(2024, 7, 13, 11, 0),
    end: new Date(2024, 7, 13, 11, 45),
  },

  {
    title: 'History',
    allDay: false,
    start: new Date(2024, 7, 13, 14, 0),
    end: new Date(2024, 7, 13, 14, 45),
  },
  {
    title: 'Math',
    allDay: false,
    start: new Date(2024, 7, 14, 8, 0),
    end: new Date(2024, 7, 14, 8, 45),
  },
  {
    title: 'Biology',
    allDay: false,
    start: new Date(2024, 7, 14, 10, 0),
    end: new Date(2024, 7, 14, 10, 45),
  },

  {
    title: 'Chemistry',
    allDay: false,
    start: new Date(2024, 7, 14, 13, 0),
    end: new Date(2024, 7, 14, 13, 45),
  },
  {
    title: 'History',
    allDay: false,
    start: new Date(2024, 7, 14, 14, 0),
    end: new Date(2024, 7, 13, 14, 45),
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2024, 7, 15, 9, 0),
    end: new Date(2024, 7, 15, 9, 45),
  },
  {
    title: 'Biology',
    allDay: false,
    start: new Date(2024, 7, 15, 10, 0),
    end: new Date(2024, 7, 15, 10, 45),
  },
  {
    title: 'Physics',
    allDay: false,
    start: new Date(2024, 7, 15, 11, 0),
    end: new Date(2024, 7, 15, 11, 45),
  },

  {
    title: 'History',
    allDay: false,
    start: new Date(2024, 7, 15, 14, 0),
    end: new Date(2024, 7, 15, 14, 45),
  },
  {
    title: 'Math',
    allDay: false,
    start: new Date(2024, 7, 16, 8, 0),
    end: new Date(2024, 7, 16, 8, 45),
  },
  {
    title: 'English',
    allDay: false,
    start: new Date(2024, 7, 16, 9, 0),
    end: new Date(2024, 7, 16, 9, 45),
  },

  {
    title: 'Physics',
    allDay: false,
    start: new Date(2024, 7, 16, 11, 0),
    end: new Date(2024, 7, 16, 11, 45),
  },
  {
    title: 'Chemistry',
    allDay: false,
    start: new Date(2024, 7, 16, 13, 0),
    end: new Date(2024, 7, 16, 13, 45),
  },
  {
    title: 'History',
    allDay: false,
    start: new Date(2024, 7, 16, 14, 0),
    end: new Date(2024, 7, 16, 14, 45),
  },
];
