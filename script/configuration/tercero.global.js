const API_PRE_CONFIG = {

    base_address: "http://localhost",
    base_port: ":8091",
};

const API_CONFIG = {

    base_url: API_PRE_CONFIG.base_address + API_PRE_CONFIG.base_port,
    base_protocol: API_PRE_CONFIG.base_address + ":3002"
};

const API_PREFIX = {

    base_template_prefix: API_CONFIG.base_url + "/template/view/",
    base_directive_template_prefix: API_CONFIG.base_url + "/template/directive/"
};

const GLOBAL_API = {

    route: {
        home: "/",
        course: "/courses",
        faculty: "/faculty",
        student: "/student",
        staff: "/staff",
        resource: "/resources",
        research: "/research",
        achievement: "/achievements",
        gallery: "/gallery",
        contact: "/contact"
    },

    template: {
        home: API_PREFIX.base_template_prefix + "home.html",
        course: API_PREFIX.base_template_prefix + "course.html",
        faculty: API_PREFIX.base_template_prefix + "faculty.html",
        student: API_PREFIX.base_template_prefix + "student.html",
        staff: API_PREFIX.base_template_prefix + "staff.html",
        resource: API_PREFIX.base_template_prefix + "resource.html",
        research: API_PREFIX.base_template_prefix + "research.html",
        achievement: API_PREFIX.base_template_prefix + "achievement.html",
        gallery: API_PREFIX.base_template_prefix + "gallery.html",
        contact: API_PREFIX.base_template_prefix + "contact.html",
    }
};

const GLOBAL_CONST = {

    version: {
        tercero: "0.1"
    },

    controller: {
        dashboard: "dashboard_controller",
        home: "home_controller",
        course: "course_controller",
        faculty: "faculty_controller",
        student: "student_controller",
        staff: "staff_controller",
        resource: "resource_controller",
        research: "research_controller",
        achievement: "achievement_controller",
        gallery: "gallery_controller",
        contact: "contact_controller"
    }
};

const GLOBAL_METHOD = {

};