export const patients: Patient[] = [
  {
    id: "1",
    name: "Ahmed Hassan",
    age: 45,
    gender: "Male",
    phone: "+216 98 123 456",
    email: "ahmed.hassan@email.com",
    lastVisit: "2024-01-10",
    nextAppointment: "2024-01-20",
    condition: "Hypertension",
    totalVisits: 12,
    address: "123 Avenue Habib Bourguiba, Tunis",
    insurance: {
      provider: "CNAM",
      policyNumber: "TN123456789",
    },
    medicalRecord: {
      _id: "med_001",
      doctorId: "dr_001",
      diagnosis: {
        primary: "Essential Hypertension",
        icd10: "I10",
        date: "2024-01-10",
      },
      treatment: {
        medications: [
          {
            name: "Lisinopril",
            dosage: "10mg",
            frequency: "Once daily",
            startDate: "2024-01-10",
            endDate: null,
          },
          {
            name: "Atorvastatin",
            dosage: "20mg",
            frequency: "Once daily at bedtime",
            startDate: "2024-01-10",
            endDate: null,
          },
        ],
        procedures: [
          {
            name: "Blood Pressure Monitoring",
            date: "2024-01-10",
            result: "140/90 mmHg",
          },
        ],
      },
      labResults: {
        bloodPressure: [
          { date: "2024-01-10", systolic: 140, diastolic: 90 },
          { date: "2024-01-05", systolic: 145, diastolic: 95 },
          { date: "2023-12-20", systolic: 138, diastolic: 88 },
        ],
        cholesterol: [
          {
            date: "2024-01-10",
            total: 220,
            ldl: 140,
            hdl: 45,
            triglycerides: 180,
          },
          {
            date: "2023-10-15",
            total: 235,
            ldl: 155,
            hdl: 42,
            triglycerides: 195,
          },
        ],
        bloodSugar: [
          { date: "2024-01-10", fasting: 105, hba1c: 6.1 },
          { date: "2023-10-15", fasting: 98, hba1c: 5.8 },
        ],
      },
      notes: [
        "Patient reports improved energy levels since starting medication",
        "Advised to continue low-sodium diet and regular exercise",
        "Follow-up in 4 weeks to monitor blood pressure response",
        "Patient education provided on medication compliance",
      ],
      sharedWithDoctors: ["dr_002", "dr_003"],
    },
    appointments: [
      {
        date: "2024-01-20",
        time: "10:00 AM",
        type: "Follow-up",
        status: "scheduled",
      },
      {
        date: "2024-01-10",
        time: "2:00 PM",
        type: "Consultation",
        status: "completed",
      },
      {
        date: "2023-12-20",
        time: "11:00 AM",
        type: "Check-up",
        status: "completed",
      },
    ],
  },
  {
    id: "2",
    name: "Sarah Mohamed",
    age: 32,
    gender: "Female",
    phone: "+216 97 234 567",
    email: "sarah.mohamed@email.com",
    lastVisit: "2024-01-08",
    nextAppointment: "2024-01-15",
    condition: "Diabetes Type 2",
    totalVisits: 8,
    address: "456 Rue de la République, Sfax",
    insurance: {
      provider: "CNAM",
      policyNumber: "TN987654321",
    },
    medicalRecord: {
      _id: "med_002",
      doctorId: "dr_001",
      diagnosis: {
        primary: "Diabetes Mellitus Type 2",
        icd10: "E11",
        date: "2024-01-08",
      },
      treatment: {
        medications: [
          {
            name: "Metformin",
            dosage: "500mg",
            frequency: "Twice daily",
            startDate: "2024-01-08",
            endDate: null,
          },
          {
            name: "Glipizide",
            dosage: "5mg",
            frequency: "Once daily before breakfast",
            startDate: "2024-01-08",
            endDate: null,
          },
        ],
        procedures: [
          {
            name: "Blood Glucose Test",
            date: "2024-01-08",
            result: "HbA1c: 8.2%",
          },
        ],
      },
      labResults: {
        bloodPressure: [
          { date: "2024-01-08", systolic: 128, diastolic: 82 },
          { date: "2023-12-15", systolic: 135, diastolic: 85 },
        ],
        cholesterol: [
          {
            date: "2024-01-08",
            total: 190,
            ldl: 120,
            hdl: 55,
            triglycerides: 165,
          },
        ],
        bloodSugar: [
          { date: "2024-01-08", fasting: 145, hba1c: 8.2 },
          { date: "2023-12-15", fasting: 155, hba1c: 8.8 },
        ],
      },
      notes: [
        "Patient shows good compliance with medication",
        "Dietary counseling provided",
        "Blood sugar levels improving",
        "Continue current medication regimen",
      ],
      sharedWithDoctors: ["dr_002"],
    },
    appointments: [
      {
        date: "2024-01-15",
        time: "2:30 PM",
        type: "Follow-up",
        status: "scheduled",
      },
      {
        date: "2024-01-08",
        time: "10:00 AM",
        type: "Consultation",
        status: "completed",
      },
    ],
  },
  {
    id: "3",
    name: "Omar Ali",
    age: 58,
    gender: "Male",
    phone: "+216 96 345 678",
    email: "omar.ali@email.com",
    lastVisit: "2024-01-05",
    condition: "Heart Disease",
    totalVisits: 15,
    address: "789 Avenue Mongi Slim, Sousse",
    insurance: {
      provider: "CNSS",
      policyNumber: "SS456789123",
    },
    medicalRecord: {
      _id: "med_003",
      doctorId: "dr_001",
      diagnosis: {
        primary: "Coronary Artery Disease",
        icd10: "I25.1",
        date: "2024-01-05",
      },
      treatment: {
        medications: [
          {
            name: "Clopidogrel",
            dosage: "75mg",
            frequency: "Once daily",
            startDate: "2024-01-05",
            endDate: null,
          },
          {
            name: "Amlodipine",
            dosage: "5mg",
            frequency: "Once daily",
            startDate: "2024-01-05",
            endDate: null,
          },
        ],
        procedures: [
          {
            name: "ECG",
            date: "2024-01-05",
            result: "Mild ST depression in leads V4-V6",
          },
          {
            name: "Echocardiogram",
            date: "2024-01-05",
            result: "EF 55%, mild LV hypertrophy",
          },
        ],
      },
      labResults: {
        bloodPressure: [
          { date: "2024-01-05", systolic: 150, diastolic: 95 },
          { date: "2023-12-20", systolic: 148, diastolic: 92 },
        ],
        cholesterol: [
          {
            date: "2024-01-05",
            total: 240,
            ldl: 160,
            hdl: 38,
            triglycerides: 210,
          },
        ],
        bloodSugar: [{ date: "2024-01-05", fasting: 95, hba1c: 5.9 }],
      },
      notes: [
        "Patient has family history of cardiac disease",
        "Lifestyle modifications discussed",
        "Regular cardiac monitoring required",
        "Patient education on warning signs provided",
      ],
      sharedWithDoctors: ["dr_003", "dr_004"],
    },
    appointments: [
      {
        date: "2024-01-05",
        time: "9:00 AM",
        type: "Consultation",
        status: "completed",
      },
      {
        date: "2023-12-20",
        time: "2:00 PM",
        type: "Follow-up",
        status: "completed",
      },
    ],
  },
  {
    id: "4",
    name: "Fatima Nour",
    age: 28,
    gender: "Female",
    phone: "+216 95 456 789",
    email: "fatima.nour@email.com",
    lastVisit: "2024-01-12",
    nextAppointment: "2024-01-18",
    condition: "Asthma",
    totalVisits: 6,
    address: "321 Boulevard 7 Novembre, Monastir",
    insurance: {
      provider: "CNAM",
      policyNumber: "TN555666777",
    },
    medicalRecord: {
      _id: "med_004",
      doctorId: "dr_005",
      diagnosis: {
        primary: "Allergic Asthma",
        icd10: "J45.0",
        date: "2024-01-12",
      },
      treatment: {
        medications: [
          {
            name: "Salbutamol",
            dosage: "100mcg",
            frequency: "As needed",
            startDate: "2024-01-12",
            endDate: null,
          },
          {
            name: "Fluticasone",
            dosage: "125mcg",
            frequency: "Twice daily",
            startDate: "2024-01-12",
            endDate: null,
          },
        ],
        procedures: [
          {
            name: "Spirometry",
            date: "2024-01-12",
            result: "FEV1: 78% predicted",
          },
          {
            name: "Peak Flow Measurement",
            date: "2024-01-12",
            result: "420 L/min",
          },
        ],
      },
      labResults: {
        bloodPressure: [{ date: "2024-01-12", systolic: 118, diastolic: 75 }],
        cholesterol: [
          {
            date: "2024-01-12",
            total: 165,
            ldl: 95,
            hdl: 58,
            triglycerides: 120,
          },
        ],
        bloodSugar: [{ date: "2024-01-12", fasting: 88, hba1c: 5.2 }],
      },
      notes: [
        "Asthma well controlled with current medication",
        "Patient educated on inhaler technique",
        "Allergy testing recommended",
        "Environmental trigger avoidance discussed",
      ],
      sharedWithDoctors: ["dr_005"],
    },
    appointments: [
      {
        date: "2024-01-18",
        time: "3:00 PM",
        type: "Follow-up",
        status: "scheduled",
      },
      {
        date: "2024-01-12",
        time: "11:00 AM",
        type: "Consultation",
        status: "completed",
      },
    ],
  },
  {
    id: "5",
    name: "Youssef Mansour",
    age: 67,
    gender: "Male",
    phone: "+216 94 567 890",
    email: "youssef.mansour@email.com",
    lastVisit: "2024-01-03",
    condition: "Chronic Kidney Disease",
    totalVisits: 22,
    address: "654 Rue Farhat Hached, Bizerte",
    insurance: {
      provider: "CNRPS",
      policyNumber: "RP789123456",
    },
    medicalRecord: {
      _id: "med_005",
      doctorId: "dr_006",
      diagnosis: {
        primary: "Chronic Kidney Disease Stage 3",
        icd10: "N18.3",
        date: "2024-01-03",
      },
      treatment: {
        medications: [
          {
            name: "Losartan",
            dosage: "50mg",
            frequency: "Once daily",
            startDate: "2024-01-03",
            endDate: null,
          },
          {
            name: "Furosemide",
            dosage: "20mg",
            frequency: "Once daily",
            startDate: "2024-01-03",
            endDate: null,
          },
        ],
        procedures: [
          {
            name: "Kidney Function Test",
            date: "2024-01-03",
            result: "Creatinine: 2.1 mg/dL, eGFR: 35 mL/min/1.73m²",
          },
        ],
      },
      labResults: {
        bloodPressure: [
          { date: "2024-01-03", systolic: 155, diastolic: 98 },
          { date: "2023-12-10", systolic: 160, diastolic: 100 },
        ],
        cholesterol: [
          {
            date: "2024-01-03",
            total: 200,
            ldl: 125,
            hdl: 42,
            triglycerides: 165,
          },
        ],
        bloodSugar: [{ date: "2024-01-03", fasting: 110, hba1c: 6.3 }],
      },
      notes: [
        "Kidney function stable but requires monitoring",
        "Dietary protein restriction counseling provided",
        "Blood pressure management critical",
        "Regular nephrology follow-up scheduled",
      ],
      sharedWithDoctors: ["dr_006", "dr_007"],
    },
    appointments: [
      {
        date: "2024-01-03",
        time: "8:30 AM",
        type: "Consultation",
        status: "completed",
      },
      {
        date: "2023-12-10",
        time: "9:00 AM",
        type: "Follow-up",
        status: "completed",
      },
    ],
  },
  {
    id: "6",
    name: "Leila Ben Ali",
    age: 41,
    gender: "Female",
    phone: "+216 93 678 901",
    email: "leila.benali@email.com",
    lastVisit: "2024-01-11",
    nextAppointment: "2024-01-25",
    condition: "Migraine",
    totalVisits: 9,
    address: "987 Avenue de la Liberté, Gabès",
    insurance: {
      provider: "CNAM",
      policyNumber: "TN888999000",
    },
    medicalRecord: {
      _id: "med_006",
      doctorId: "dr_005",
      diagnosis: {
        primary: "Chronic Migraine",
        icd10: "G43.7",
        date: "2024-01-11",
      },
      treatment: {
        medications: [
          {
            name: "Sumatriptan",
            dosage: "50mg",
            frequency: "As needed for attacks",
            startDate: "2024-01-11",
            endDate: null,
          },
          {
            name: "Propranolol",
            dosage: "40mg",
            frequency: "Twice daily",
            startDate: "2024-01-11",
            endDate: null,
          },
        ],
        procedures: [
          {
            name: "Neurological Examination",
            date: "2024-01-11",
            result: "Normal neurological findings",
          },
        ],
      },
      labResults: {
        bloodPressure: [{ date: "2024-01-11", systolic: 125, diastolic: 80 }],
        cholesterol: [
          {
            date: "2024-01-11",
            total: 175,
            ldl: 105,
            hdl: 52,
            triglycerides: 130,
          },
        ],
        bloodSugar: [{ date: "2024-01-11", fasting: 92, hba1c: 5.4 }],
      },
      notes: [
        "Migraine frequency has decreased with treatment",
        "Trigger identification ongoing",
        "Stress management techniques discussed",
        "Patient keeping headache diary",
      ],
      sharedWithDoctors: ["dr_005"],
    },
    appointments: [
      {
        date: "2024-01-25",
        time: "4:00 PM",
        type: "Follow-up",
        status: "scheduled",
      },
      {
        date: "2024-01-11",
        time: "1:30 PM",
        type: "Consultation",
        status: "completed",
      },
    ],
  },
  {
    id: "7",
    name: "Mohamed Trabelsi",
    age: 35,
    gender: "Male",
    phone: "+216 92 111 222",
    email: "mohamed.trabelsi@email.com",
    lastVisit: "2024-01-14",
    nextAppointment: "2024-01-28",
    condition: "Anxiety",
    totalVisits: 3,
    address: "123 Rue de la Paix, Kairouan",
    medicalRecord: {
      _id: "med_007",
      doctorId: "dr_006",
      diagnosis: {
        primary: "Generalized Anxiety Disorder",
        icd10: "F41.1",
        date: "2024-01-14",
      },
      treatment: {
        medications: [
          {
            name: "Sertraline",
            dosage: "50mg",
            frequency: "Once daily",
            startDate: "2024-01-14",
            endDate: null,
          },
        ],
        procedures: [
          {
            name: "Mental Health Assessment",
            date: "2024-01-14",
            result: "Moderate anxiety symptoms",
          },
        ],
      },
      labResults: {
        bloodPressure: [{ date: "2024-01-14", systolic: 130, diastolic: 85 }],
        cholesterol: [
          {
            date: "2024-01-14",
            total: 180,
            ldl: 110,
            hdl: 50,
            triglycerides: 140,
          },
        ],
        bloodSugar: [{ date: "2024-01-14", fasting: 90, hba1c: 5.3 }],
      },
      notes: [
        "Patient reports work-related stress",
        "Cognitive behavioral therapy recommended",
        "Follow-up in 2 weeks",
      ],
      sharedWithDoctors: ["dr_006"],
    },
    appointments: [
      {
        date: "2024-01-28",
        time: "2:00 PM",
        type: "Follow-up",
        status: "scheduled",
      },
      {
        date: "2024-01-14",
        time: "10:00 AM",
        type: "Consultation",
        status: "completed",
      },
    ],
  },
];

export const patientSortOptions = [
  { value: "name", label: "Name" },
  { value: "lastVisit", label: "Last Visit" },
  { value: "age", label: "Age" },
  { value: "visits", label: "Total Visits" },
] as const;
