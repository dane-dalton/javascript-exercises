const findTheOldest = function(people) {
    const oldest = people.reduce((old, person) => {
        const { name, yearOfBirth, yearOfDeath } = person
        const isEmpty = Object.keys(old).length === 0
    
        if(isEmpty) {
            old['name'] = name
            old['yearOfBirth'] = yearOfBirth
            old['yearOfDeath'] = yearOfDeath
        }
    
        const currentOldAge = (old.yearOfDeath) ? old.yearOfDeath - old.yearOfBirth : new Date().getFullYear() - old.yearOfBirth
        const personOldAge = (yearOfDeath) ? yearOfDeath - yearOfBirth : new Date().getFullYear() - yearOfBirth
    
        if (personOldAge > currentOldAge) {
            old['name'] = name
            old['yearOfBirth'] = yearOfBirth
            old['yearOfDeath'] = yearOfDeath
        }
    
        return old
    }, {})

    // const oldest = people.sort((a, b) => {
    //     const aAge = (a.yearOfDeath) ? a.yearOfDeath - a.yearOfBirth : new Date().getFullYear() - a.yearOfBirth
    //     const bAge = (b.yearOfDeath) ? b.yearOfDeath - b.yearOfBirth : new Date().getFullYear() - b.yearOfBirth

    //     return (aAge > bAge) ? -1 : 1
    // })

    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
