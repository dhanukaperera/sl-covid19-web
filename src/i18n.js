import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
	en: {
		translation: {
			APP_TITLE: "Sri Lanka COVID-19 Status",
			CASES: "Cases",
			"Active Cases": "Active Cases",
			DEATHS: "Deaths",
			RECOVERED: "Recovered",
			HOSPITAL_STATUS: "Hospital Status",
			TOTAL_INDIVIDUALS_IN_HOSPITALS: "Total Individuals in Hospitals",
			TESTED: "Tested",
			TREATMENT: "Treatment",
			LOCAL: "Local",
			FOREIGN: "Foreign",
			TOTAL: "Total",
			LAST_UPDATED: "Last Updated",
			DATA_SOURCE: "Data Source"
		}
	},

	sn: {
		translation: {
			APP_TITLE: "ශ්‍රී ලංකාවේ COVID-19 තත්වය",
			CASES: "තහවුරු රෝගීන්",
			"Active Cases": "ප්‍රතිකාර ලබන",
			DEATHS: "මරණ",
			RECOVERED: "සුවය ලැබූවන්",
			HOSPITAL_STATUS: "රෝහල් තත්වය",
			TOTAL_INDIVIDUALS_IN_HOSPITALS: "ප්‍රතිකාර ලබන සැක සහිත රෝගීන් සංඛ්‍යාව",
			TESTED: "පරීක්ෂා කර ඇත",
			TREATMENT: "ප්‍රතිකාර ලබන",
			LOCAL: "දේශීය",
			FOREIGN: "විදේශීය",
			TOTAL: "එකතුව",
			LAST_UPDATED: "අවසන් වරට යාවත්කාලීන කරන ලදි",
			DATA_SOURCE: "දත්ත මූලාශ්රය"
		}
	},
	ta: {
		translation: {
			APP_TITLE: "இலங்கையில் COVID-19 நிலை",
			CASES: "நோயாளிகள்",
			"Active Cases": "சிகிச்சை பெறும்",
			DEATHS: "மரணங்கள்",
			RECOVERED: "குணமாகும்",
			HOSPITAL_STATUS: "மருத்துவமனை நிலை",
			TOTAL_INDIVIDUALS_IN_HOSPITALS:
				"மருத்துவமனைகளில் மொத்த நபர்களின் எண்ணிக்கை",
			TESTED: "சோதிக்கப்பட்டது",
			TREATMENT: "சிகிச்சை பெறுதல்",
			LOCAL: "உள்ளூர்",
			FOREIGN: "வெளிநாட்டு",
			TOTAL: "மொத்தம்",
			LAST_UPDATED: "கடைசியாக புதுப்பிக்கப்பட்டது",
			DATA_SOURCE: "தரவு மூலம்"
		}
	}
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "sn",

		keySeparator: false, // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;
