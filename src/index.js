
const ApiClient = require('./ApiClient');

const SessionsAPI           = require('./Sessions');
const SettingsAPI           = require('./Settings');
const AccountsAPI           = require('./Accounts');
const QuestionsAPI          = require('./Questions');
const QuizzesAPI            = require('./Quizzes');
const ActivationsAPI        = require('./Activations');
const QuizSessionAPI        = require('./QuizSessions');
const ActionsAPI            = require('./Actions');
const MetadatasAPI          = require('./Metadatas');
const CourseRequestsAPI     = require('./CourseRequests');
const PromoCodesAPI         = require('./PromoCodes');
const AssessmentSystemsAPI  = require('./AssessmentSystems');
const OrganizationsAPI      = require('./Organizations');
const NetworksAPI           = require('./Networks');
const TagsAPI               = require('./Tags');
const QuizwalActivationsAPI = require('./quizwall/Activations');

module.exports = function ({ apiPrefix, isVerbose = false } = {}) {
    if (!apiPrefix) {
        throw new Error('[apiPrefix] required');
    }

    const apiClient = new ApiClient({ prefix: apiPrefix, isVerbose });

    return {
        apiClient,
        sessions          : new SessionsAPI({ apiClient }),
        settings          : new SettingsAPI({ apiClient }),
        accounts          : new AccountsAPI({ apiClient }),
        questions         : new QuestionsAPI({ apiClient }),
        quizzes           : new QuizzesAPI({ apiClient }),
        activations       : new ActivationsAPI({ apiClient }),
        quizSessions      : new QuizSessionAPI({ apiClient }),
        actions           : new ActionsAPI({ apiClient }),
        metadatas         : new MetadatasAPI({ apiClient }),
        courseRequests    : new CourseRequestsAPI({ apiClient }),
        promoCodes        : new PromoCodesAPI({ apiClient }),
        assessmentSystems : new AssessmentSystemsAPI({ apiClient }),
        organizations     : new OrganizationsAPI({ apiClient }),
        networks          : new NetworksAPI({ apiClient }),
        tags              : new TagsAPI({ apiClient }),

        quizwall : {
            activations: new QuizwalActivationsAPI({ apiClient })
        }
    };
};
