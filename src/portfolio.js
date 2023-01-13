const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Oussi108',
  title: 'Dev',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'El houcine OUSSI',
  role: 'Developer',
  description:
    'Computer Science student with experience in .NET development and programming. Strong skills in C# and ASP.NET. Familiar with SQL Server and Entity Framework. Currently working on a project in web development using',
  resume: 'https://github.com/Oussi108',
  social: {
    linkedin: 'https://www.linkedin.com/in/el-houcine-oussi-5abb8a1b7/',
    github: 'https://github.com/Oussi108',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Desktop Gym Manger ',
    description:
      'Introducing the Desktop Gym Manager app, the ultimate tool for managing your gym members. Easily track and manage member information, schedule and assign staff shifts, and monitor gym equipment usage. Stay on top of financials with real-time reporting and budgeting capabilities. Keep your gym running smoothly with automated task management and safety alerts. The user-friendly interface and convenient mobile access make it the perfect solution for busy gym managers. Stay connected to your gym and make informed decisions with the Desktop Gym Manager app.',
    stack: ['C#', 'Xml', 'sql server'],
    sourceCode: 'https://github.com/Oussi108/DesktopGymManger',
    livePreview: 'https://github.com/Oussi108/DesktopGymManger',
  },
  {
    name: 'Hotel Managment',
    description:
      'Introducing the Hotel Management app, the ultimate tool for managing your hotel on the go. Easily track and manage guest information, bookings, and room availability. Streamline check-in and check-out processes with automated features. Monitor and manage staff schedules, payroll, and performance. Stay on top of financials with real-time reporting and budgeting capabilities. Keep your hotel running smoothly with automated task management and safety alerts. The user-friendly interface and convenient mobile access make it the perfect solution for busy hotel managers. Stay connected to your hotel and make informed decisions with the Hotel Management app.',
    stack: ['C#', 'Xml', 'sql server'],
    sourceCode: 'https://github.com/Oussi108/HotelManagment_2year',
    livePreview: 'https://github.com/Oussi108/HotelManagment_2year',
  },
  {
    name: 'Gym App',
    description:
      'Introducing the Gym App, the ultimate tool for tracking your fitness progress and managing your gym experience. Easily track your workouts, set and achieve fitness goals, and access personalized workout plans. Stay connected to your gym by booking classes and viewing class schedules. Monitor your progress with detailed stats and tracking features. The app also allows you to manage your gym membership, view your billing history, and make payments. The intuitive interface and convenient mobile access make it the perfect companion for gym-goers of all levels. Stay on top of your fitness and manage your gym experience with the Gym App.',
    stack: ['Java', 'Sqllite', 'Xml'],
    sourceCode: 'https://github.com/Oussi108/AppGymProv1',
    livePreview: 'https://github.com/Oussi108/AppGymProv1',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  '.Net',
  'JEE',
  'Python',
  'Git',
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'oussi108@gmail.com',
}

export { header, about, projects, skills, contact }
