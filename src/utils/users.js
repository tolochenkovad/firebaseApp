export const firebaseUserToTripPlanUser = user => {
    const [firstName, lastName] = `${user.displayName}`.split(' ');
    return (
        {
            uid: user.uid,
            email: `${user.email}`,
            firstName: firstName ? firstName : '',
            created: new Date().toISOString(),
            lastLogin: new Date().toISOString(),
        }
    )
};
