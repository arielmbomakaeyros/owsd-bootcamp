import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "Contact Name", uid: "name", sortable: true}, // modified
  {name: "Last Name", uid: "surname", sortable: true}, // modified
  {name: "Number", uid: "phoneNumber"}, // modified
  {name: "Contact Email", uid:"email"},
  {name: "Gender", uid: "gender", sortable: true},
  {name: "Date of Birth", uid: "dateOfBirth"}, // modified
  {name: "Student", uid: "student", sortable: true},
  {name: "Faculty", uid: "faculty"}, // modified
  {name: "Research Domain", uid: "researchDomain"}, // modified
  {name: "Profession", uid: "profession"}, // modified
  {name: "R Language Level", uid: "rLanguageLevel"}, // modified
  {name: "OWSD Member", uid: "oswdMenber"}, // modified

  {name: "ACTIONS", uid: "actions"},

  // {name: "ID", uid: "id", sortable: true},
  // {name: "NAME", uid: "name", sortable: true},
  // {name: "AGE", uid: "age", sortable: true},
  // {name: "ROLE", uid: "role", sortable: true},
  // {name: "TEAM", uid: "team"},
  // {name: "EMAIL", uid: "email"},
  // {name: "STATUS", uid: "status", sortable: true},
  // {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    number: "678789804",
    status: "active",
    company_name: "kaeyros Analytics",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Tech Lead",
    number: "678789804",
    status: "paused",
    company_name: "kaeyros Analytics",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Sr. Dev",
    number: "678789804",
    status: "active",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "C.M.",
    number: "678789804",
    status: "vacation",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "S. Mancompany_namer",
    number: "678789804",
    status: "active",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    name: "Brian Kim",
    role: "P. Mancompany_namer",
    number: "678789804",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "brian.kim@example.com",
    status: "Active",
  },
  {
    id: 7,
    name: "Michael Hunt",
    role: "Designer",
    number: "678789804",
    status: "paused",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    email: "michael.hunt@example.com",
  },
  {
    id: 8,
    name: "Samantha Brooks",
    role: "HR Mancompany_namer",
    number: "678789804",
    status: "active",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    email: "samantha.brooks@example.com",
  },
  {
    id: 9,
    name: "Frank Harrison",
    role: "F. Mancompany_namer",
    number: "678789804",
    status: "vacation",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "frank.harrison@example.com",
  },
  {
    id: 10,
    name: "Emma Adams",
    role: "Ops Mancompany_namer",
    number: "678789804",
    status: "active",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?img=5",
    email: "emma.adams@example.com",
  },
  {
    id: 11,
    name: "Brandon Stevens",
    role: "Jr. Dev",
    number: "678789804",
    status: "active",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?img=8",
    email: "brandon.stevens@example.com",
  },
  {
    id: 12,
    name: "Megan Richards",
    role: "P. Mancompany_namer",
    number: "678789804",
    status: "paused",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?img=10",
    email: "megan.richards@example.com",
  },
  {
    id: 13,
    name: "Oliver Scott",
    role: "S. Mancompany_namer",
    number: "678789804",
    status: "active",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?img=12",
    email: "oliver.scott@example.com",
  },
  {
    id: 14,
    name: "Grace Allen",
    role: "M. Specialist",
    number: "678789804",
    status: "active",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?img=16",
    email: "grace.allen@example.com",
  },
  {
    id: 15,
    name: "Noah Carter",
    role: "IT Specialist",
    number: "678789804",
    status: "paused",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?img=15",
    email: "noah.carter@example.com",
  },
  {
    id: 16,
    name: "Ava Perez",
    role: "Mancompany_namer",
    number: "678789804",
    status: "active",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?img=20",
    email: "ava.perez@example.com",
  },
  {
    id: 17,
    name: "Liam Johnson",
    role: "Data Analyst",
    number: "678789804",
    status: "active",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?img=33",
    email: "liam.johnson@example.com",
  },
  {
    id: 18,
    name: "Sophia Taylor",
    role: "QA Analyst",
    number: "678789804",
    status: "active",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?img=29",
    email: "sophia.taylor@example.com",
  },
  {
    id: 19,
    name: "Lucas Harris",
    role: "Administrator",
    number: "678789804",
    status: "paused",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?img=50",
    email: "lucas.harris@example.com",
  },
  {
    id: 20,
    name: "Mia Robinson",
    role: "Coordinator",
    number: "678789804",
    status: "active",
    company_name: "Your Company",
    avatar: "https://i.pravatar.cc/150?img=45",
    email: "mia.robinson@example.com",
  },
];

export {columns, users, statusOptions};
