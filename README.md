# STUDENTS MANAGEMENT SYSTEM

This project provides two API endpoints for add and retrieving student records.

## API DESCRIPTION

### Add a student

```apl
REQUEST TYPE: POST

URL: https://school-management-8d8i.onrender.com/

BODY(JSON): 
{
    "studentID": "<studentID>",
    "firstName": "<firstName>",
    "lastName": "<lastName>",
    "sex": "<sex>",
    "level": "<level>"
}
```

**Note**

- Replace `<studentID>` with an actual student ID.
- Replace `<firstName>` with the first name of the student.
- Replace `<lastName>` with last name of the student.
- Replace `<sex>` with the sex of the student. The should be `M` for male and `F` for female.
- Replace `<level>` with the level of study of the student. Possible values are `100`, `200`, `300`, `400`, `500`, `600` and `700`.

### Get a student

```apl
REQUEST TYPE: GET

URL: https://school-management-8d8i.onrender.com/<studentID>
```

**Note**

- `<studentID>` should be replace with the actual student ID.