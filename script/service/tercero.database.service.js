tercero.service('databaseservice', ['preferenceservice', function (preferenceservice) {

    const preference = preferenceservice.tercero_local_storage_handler;

    const sidenav_options = [{
        option_title: 'home',
        route: GLOBAL_API.route.home
    }, {
        option_title: 'courses',
        route: GLOBAL_API.route.course
    }, {
        option_title: 'faculty',
        route: GLOBAL_API.route.faculty
    }, {
        option_title: 'students',
        route: GLOBAL_API.route.student
    }, {
        option_title: 'resources',
        route: GLOBAL_API.route.resource
    }, {
        option_title: 'research',
        route: GLOBAL_API.route.research
    }, {
        option_title: 'photo gallery',
        route: GLOBAL_API.route.gallery
    }, {
        option_title: 'contact us',
        route: GLOBAL_API.route.contact
    }];

    const faculty = [{
        name: "Dr. Priya Ranjan Sinha Mahapatra",
        profile_picture: "http://localhost:8093/image/displaypicture.jpeg",
        designation: "Associate Professor & Head",
        degree: "B.Sc. (Mathematics.), M.Sc. (Applied Mathematics), M.C.A., Ph.D.",
        specialization: "Computational geometry, Data structure and Algorithms",
        email: "priya_cskly@yahoo.co.in",
        homepage: null
    }, {
        name: "Dr. Anirban Mukhopadhyay",
        profile_picture: "http://localhost:8093/image/displaypicture.jpeg",
        designation: "Professor",
        degree: "B.E. (Computer Sc.), M.E. (Computer Sc.), Ph.D.",
        specialization: "Data mining, Soft and evolutionary computing, bioinformatics",
        email: "anirban@klyuniv.ac.in",
        homepage: "www.anirbanm.in"
    }, {
        name: "Dr. Utpal Biswas",
        profile_picture: "http://localhost:8093/image/displaypicture.jpeg",
        designation: "Professor",
        degree: "B.E. (Computer Sc.), M.E. (Computer Sc.), Ph.D.",
        specialization: "Optical networks, Sensor & mobile ad-hoc networks, Semantic webs",
        email: "utpal01in@yahoo.com",
        homepage: null
    }, {
        name: "Dr. Jyotsna K. Mandal",
        profile_picture: "http://localhost:8093/image/displaypicture.jpeg",
        designation: "Professor",
        degree: "B.Sc. (Physics), M.Sc. (Physics), M.Tech. (Computer Sc.), Ph.D.",
        specialization: "Data and network security Cryptography, GIS and remote sensing",
        email: "jkm.cse@gmail.com",
        homepage: "www.jkmandal.com"
    }, {
        name: "Dr. Kalyani Mali",
        profile_picture: "http://localhost:8093/image/displaypicture.jpeg",
        designation: "Professor",
        degree: "B.Sc. (Mathematics), B.Tech. (Computer Sc.), M.Tech. (Computer Sc.), Ph.D.",
        specialization: "Digital image processing, pattern recognition, Neural network",
        email: "kalyanimali1992@gmail.com",
        homepage: null
    }, {
        name: "Dr. Debabrata Sarddar",
        profile_picture: "http://localhost:8093/image/displaypicture.jpeg",
        designation: "Assistant Professor",
        degree: "B.E. (Computer Sc.), M.Tech. (Computer Sc.)",
        specialization: "Mobile computing, wireless and satellite communication",
        email: "dsarddar@rediffmail.com",
        homepage: null
    }];

    const news_updates = [{
        title: 'Department Profile on the occasion of NAAC visit.'
    }, {
        title: 'Annual Department Magazine by students - 2019.'
    }, {
        title: 'DSC PURSE Sponsored one-week Faculty Development Programme on Visual TCAD & Genius Device Simulator 2016 (TCAD & JDS), September 5-9, 2016.'
    }];

    const course = [{
        id: 1,
        name: "MCA",
        fullname: "Masters in Computer Application",
        description: "This is a three-year course spanned over six semeters, two semesters per year. The course is AICTE approved (WB-005/ET-MCA/2001). The number of seats for the course is 30. The students are admitted through state level examination (JECA) conducted by Joint Entrance Board, West Bengal. The tuition fee is Rs. 10,000/- per semester.",
        syllabus_link: "",
        image_link: ""
    }, {
        id: 2,
        name: "M.Tech. (CSE)",
        fullname: "M.Tech. in Computer Science & Engineering",
        description: "This is a two-year course spanned over four semeters, two semesters per year. This course is also AICTE approved (750-80-115/E(ET)/99). The number of seats for the course is 18. The students are admitted through GATE score, written test and interview. The tuition fees are Rs. 12,000/- (GATE), Rs. 20,000 (Non-GATE), Rs. 25,000/- (Sponsored), and Rs. 60,000/- (NRI and foreign nationals) per semester.",
        syllabus_link: "",
        image_link: ""
    }, {
        id: 3,
        name: "Ph.D.",
        fullname: "Doctor of Philosophy",
        description: "The department also offers Ph.D. in different areas of computer science and its applications. Currently there are four full time and several part time Ph.D. scolars working under the supervision of various faculty members. The department conducts Ph.D. entrance test two times in each year. The test consists of written test and interview.",
        syllabus_link: "",
        image_link: ""
    }, {
        id: 4,
        name: "MSc. (Computer Science)",
        fullname: "MSc. Computer Science",
        description: "",
        syllabus_link: "",
        image_link: ""
    }];

    const photo = [{
        url: "https://i.ibb.co/ZBTpk8L/1.jpg"
    }, {
        url: "https://i.ibb.co/rMHpH9s/2.jpg"
    }, {
        url: "https://i.ibb.co/cgCztrp/3.jpg"
    }, {
        url: "https://i.ibb.co/YcvPHr9/4.jpg"
    }, {
        url: "https://i.ibb.co/1dy5PXh/5.jpg"
    }, {
        url: "https://i.ibb.co/ZSf2d7K/6.jpg"
    }, {
        url: "https://i.ibb.co/31xSPDm/7.jpg"
    }, {
        url: "https://i.ibb.co/qjHsT9t/8.png"
    }, {
        url: "https://i.ibb.co/1RNgF02/9.jpg"
    }, {
        url: "https://i.ibb.co/wYWLkp3/10.png"
    }, {
        url: "https://i.ibb.co/kXyrBpy/11.jpg"
    }, {
        url: "https://i.ibb.co/XJvZmRZ/12.jpg"
    }, {
        url: "https://i.ibb.co/3sSfgt4/13.jpg"
    }, {
        url: "https://i.ibb.co/qdffFL4/14.jpg"
    }, {
        url: "https://i.ibb.co/kVnKSbN/15.jpg"
    }, {
        url: "https://i.ibb.co/m9p4Kst/16.jpg"
    }, {
        url: "https://i.ibb.co/dKw9Ksq/17.jpg"
    }, {
        url: "https://i.ibb.co/0Fw7yJC/18.jpg"
    }, {
        url: "https://i.ibb.co/pQRQhp2/19.jpg"
    }, {
        url: "https://i.ibb.co/8Yb6XX4/20.jpg"
    }, {
        url: "https://i.ibb.co/3r9T6cM/21.jpg"
    }, {
        url: "https://i.ibb.co/7R557mt/22.jpg"
    }, {
        url: "https://i.ibb.co/SswcKY5/23.jpg"
    }, {
        url: "https://i.ibb.co/HCF28wg/24.jpg"
    }, {
        url: "https://i.ibb.co/MVkVcvd/25.jpg"
    }, {
        url: "https://i.ibb.co/GHkQdzf/26.jpg"
    }, {
        url: "https://i.ibb.co/DVjWfpg/27.jpg"
    }, {
        url: "https://i.ibb.co/nBfWCNy/28.jpg"
    }, {
        url: "https://i.ibb.co/Z2zmWpW/29.jpg"
    }, {
        url: "https://i.ibb.co/8zK2ycQ/30.jpg"
    }, {
        url: "https://i.ibb.co/t2q9C72/31.jpg"
    }, {
        url: "https://i.ibb.co/XxrbbPB/32.jpg"
    }, {
        url: "https://i.ibb.co/kqCp5wv/33.jpg"
    }, {
        url: "https://i.ibb.co/47cgB2t/34.jpg"
    }, {
        url: "https://i.ibb.co/K7DG7J9/35.jpg"
    }, {
        url: "https://i.ibb.co/K7DG7J9/35.jpg"
    }, {
        url: "https://i.ibb.co/xsRfFkz/37.jpg"
    }, {
        url: "https://i.ibb.co/GPTwjSJ/38.jpg"
    }, {
        url: "https://i.ibb.co/0KHKtvz/39.jpg"
    }, {
        url: "https://i.ibb.co/VpQPDsB/40.jpg"
    }, {
        url: "https://i.ibb.co/Fs5xqxk/41.jpg"
    }, {
        url: "https://i.ibb.co/BrZVL9y/42.jpg"
    }, {
        url: "https://i.ibb.co/hYFwr25/43.jpg"
    }, {
        url: "https://i.ibb.co/v4R7B36/44.jpg"
    }, {
        url: "https://i.ibb.co/NsLJZFk/45.jpg"
    }, {
        url: "https://i.ibb.co/QPbLjfb/46.jpg"
    }];

    return ({
        sidenav: sidenav_options,
        news: news_updates,
        faculty: faculty,
        course: course,
        photo: photo
    });
}]);




// {
//     url: "https://i.ibb.co/dQQVMFn/47.jpg"
// }, {
//     url: "https://i.ibb.co/NFgKGvz/48.jpg"
// }, {
//     url: "https://i.ibb.co/5jrQhKK/49.jpg"
// }, {
//     url: "https://i.ibb.co/DwRMfdZ/50.jpg"
// }, {
//     url: "https://i.ibb.co/dk3BNdJ/51.jpg"
// }, {
//     url: "https://i.ibb.co/6DCSdD1/52.jpg"
// }, {
//     url: "https://i.ibb.co/RTwnMJ1/53.jpg"
// }, {
//     url: "https://i.ibb.co/gVhH0D8/54.jpg"
// }



// {
//     option_title: 'staff',
//     route: GLOBAL_API.route.staff
// },

// {
//     option_title: 'achievements',
//     route: GLOBAL_API.route.achievement
// }, 