export const data = [
    {
        title: 'jenkins',
        progressPercentage: 70,
        accessPermission: {
            headers: [
                "Entity", "Permissions", "Repo/Branch"
            ],
            data: [
                {entity: 'user1@company.com', permission: 'merge, delete', branch: 'master'},
                {entity: 'user2@eee.com', permission: 'commit delete', branch: 'master'},
                {entity: 'user3@company.com', permission: 'commit', branch: 'dev'},
               
            ]
        },
        noMFA: {
            headers: [
                "Entity"
            ],
            data: [
                {entity: 'user1@company.com'},
                {entity: 'user2@eee.com'},
                {entity: 'user3@company.com'},
                {entity: 'user4@f.com'},
                {entity: 'user5@company.com'},
                {entity: 'hy@company.com'},
                {entity: 'fgg@company.com'},
                {entity: 'ffff@company.com'},
            ]
        }
    },
    {
        title: 'github',
        progressPercentage: 20,
        accessPermission: {
            headers: [
                "Entity", "Permissions", "Repo/Branch"
            ],
            data: [
                {entity: 'user1@company.com', permission: 'merge, delete', branch: 'master'},
                {entity: 'user2@eee.com', permission: 'commit delete', branch: 'master'},
                {entity: 'user3@company.com', permission: 'commit', branch: 'dev'},
                {entity: 'user4@f.com', permission: 'commit, merge, delete', branch: 'master'},
                {entity: 'user5@company.com', permission: 'merge, delete', branch: 'dev'},
                {entity: 'hy@company.com', permission: 'delete', branch: 'master'},
                {entity: 'fgg@company.com', permission: 'merge, delete', branch: 'master'},
                {entity: 'ffff@company.com', permission: 'commit, merge, delete', branch: 'master'},
            ]
        },
        noMFA: {
            headers: [
                "Entity"
            ],
            data: [
                {entity: 'user1@company.com'},
                {entity: 'user2@eee.com'},
                {entity: 'user3@company.com'},
               
            ]
        }
    }

]