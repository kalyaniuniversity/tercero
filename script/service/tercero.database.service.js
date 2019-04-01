tercero.service('databaseservice', ['preferenceservice', function (preferenceservice) {

    const preference = preferenceservice.paperdesk_local_storage_handler;

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
        option_title: 'staff',
        route: GLOBAL_API.route.staff
    }, {
        option_title: 'resources',
        route: GLOBAL_API.route.resource
    }, {
        option_title: 'research',
        route: GLOBAL_API.route.research
    }, {
        option_title: 'achievements',
        route: GLOBAL_API.route.achievement
    }, {
        option_title: 'photo gallery',
        route: GLOBAL_API.route.gallery
    }, {
        option_title: 'contact us',
        route: GLOBAL_API.route.contact
    }];

    const faculty = [{
        name: "Dr. Priya Ranjan Sinha Mahapatra",
        profile_picture: "http://localhost:8091/image/displaypicture.jpeg",
        designation: "Associate Professor & Head",
        degree: "B.Sc. (Mathematics.), M.Sc. (Applied Mathematics), M.C.A., Ph.D.",
        specialization: "Computational geometry, Data structure and Algorithms",
        email: "priya_cskly@yahoo.co.in",
        homepage: null
    }, {
        name: "Dr. Anirban Mukhopadhyay",
        profile_picture: "http://localhost:8091/image/displaypicture.jpeg",
        designation: "Associate Professor",
        degree: "B.E. (Computer Sc.), M.E. (Computer Sc.), Ph.D.",
        specialization: "Data mining, Soft and evolutionary computing, bioinformatics",
        email: "anirban@klyuniv.ac.in",
        homepage: "www.anirbanm.in"
    }, {
        name: "Dr. Utpal Biswas",
        profile_picture: "http://localhost:8091/image/displaypicture.jpeg",
        designation: "Professor",
        degree: "B.E. (Computer Sc.), M.E. (Computer Sc.), Ph.D.",
        specialization: "Optical networks, Sensor & mobile ad-hoc networks, Semantic webs",
        email: "utpal01in@yahoo.com",
        homepage: null
    }, {
        name: "Dr. Jyotsna K. Mandal",
        profile_picture: "http://localhost:8091/image/displaypicture.jpeg",
        designation: "Professor",
        degree: "B.Sc. (Physics), M.Sc. (Physics), M.Tech. (Computer Sc.), Ph.D.",
        specialization: "Data and network security Cryptography, GIS and remote sensing",
        email: "jkm.cse@gmail.com",
        homepage: "www.jkmandal.com"
    }, {
        name: "Dr. Kalyani Mali",
        profile_picture: "http://localhost:8091/image/displaypicture.jpeg",
        designation: "Professor",
        degree: "B.Sc. (Mathematics), B.Tech. (Computer Sc.), M.Tech. (Computer Sc.), Ph.D.",
        specialization: "Digital image processing, pattern recognition, Neural network",
        email: "kalyanimali1992@gmail.com",
        homepage: null
    }, {
        name: "Mr. Debabrata Sarddar",
        profile_picture: "http://localhost:8091/image/displaypicture.jpeg",
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

    return ({
        sidenav: sidenav_options,
        news: news_updates,
        faculty: faculty
    });
}]);