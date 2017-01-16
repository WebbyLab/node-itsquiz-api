
const ApiClient = require('./ApiClient');

const SessionsAPI          = require('./Sessions');
const SettingsAPI          = require('./Settings');
const AccountsAPI          = require('./Accounts');
const QuestionsAPI         = require('./Questions');
const QuizzesAPI           = require('./Quizzes');
const ActivationsAPI       = require('./Activations');
const QuizSessionAPI       = require('./QuizSessions');
const ActionsAPI           = require('./Actions');
const MetadatasAPI         = require('./Metadatas');
const CourseRequestsAPI    = require('./CourseRequests');
const PromoCodesAPI        = require('./PromoCodes');
const AssessmentSystemsAPI = require('./AssessmentSystems');
const OrganizationsAPI     = require('./Organizations');
const NetworksAPI          = require('./Networks');
const TagsAPI              = require('./Tags');

module.exports = function (config) {
    if (!config || !config.apiPrefix) {
        throw new Error('[config.apiPrefix] required');
    }

    const api = new ApiClient({ prefix: config.apiPrefix });

    return {
        apiClient         : api,
        sessions          : new SessionsAPI({ apiClient: api }),
        settings          : new SettingsAPI({ apiClient: api }),
        accounts          : new AccountsAPI({ apiClient: api }),
        questions         : new QuestionsAPI({ apiClient: api }),
        quizzes           : new QuizzesAPI({ apiClient: api }),
        activations       : new ActivationsAPI({ apiClient: api }),
        quizSessions      : new QuizSessionAPI({ apiClient: api }),
        actions           : new ActionsAPI({ apiClient: api }),
        metadatas         : new MetadatasAPI({ apiClient: api }),
        courseRequests    : new CourseRequestsAPI({ apiClient: api }),
        promoCodes        : new PromoCodesAPI({ apiClient: api }),
        assessmentSystems : new AssessmentSystemsAPI({ apiClient: api }),
        organizations     : new OrganizationsAPI({ apiClient: api }),
        networks          : new NetworksAPI({ apiClient: api }),
        tags              : new TagsAPI({ apiClient: api })
    };
};
