export const column = [
    {
        title: "First Name",
        dataIndex:"firstName",
        key:"firstName"
    },
    {
        title: "Last Name",
        dataIndex:"lastName",
        key:"lastName"
    },
    {
        title: "Work Experience",
        dataIndex:"workExperience",
        key:"workExperience"
    },
    {
        title: "Rating",
        dataIndex:"rating",
        key:"rating"
    },
]

export const getNames = allMasters => {
    console.log(typeof allMasters)
    return allMasters.map(master => master.firstName.concat(" ",master.lastName));
}