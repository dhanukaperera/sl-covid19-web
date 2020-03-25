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
			DATA_SOURCE: "Data Source",
			"National Institute of Infectious Diseases":
				"National Institute of Infectious Diseases",
			"National Hospital Sri Lanka": "National Hospital Sri Lanka",
			"TH - Ragama": "TH - Ragama",
			"TH - Karapitiya": "TH - Karapitiya",
			"TH - Anuradhapura": "TH - Anuradhapura",
			"TH - Kurunegala": "TH - Kurunegala",
			"TH- Jaffna": "TH - Jaffna",
			"National Hospital Kandy": "National Hospital Kandy",
			"TH – Batticaloa": "TH – Batticaloa",
			"DGH- Gampaha": "DGH- Gampaha",
			"DGH – Negombo": "DGH – Negombo",
			"TH – Rathnapura": "TH – Rathnapura",
			"PGH – Badulla": "PGH – Badulla",
			LRH: "LRH",
			DMH: "DMH",
			"DGH – Polonnaruwa": "DGH – Polonnaruwa",
			"TH - Kalubowila": "TH - Kalubowila",
			"Castle Street Teaching Hospital": "Castle Street Teaching Hospital",
			"Base Hospital- Hambantota": "Base Hospital - Hambantota",
			"Base Hospital - Monaragala": "Base Hospital - Monaragala",
			"Base Hospital - Welikanda": "Base Hospital - Welikanda",
			"DGH-Kalutara": "DGH - Kalutara",
			"Chest Hospital Welisara": "Chest Hospital Welisara"
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
			DATA_SOURCE: "දත්ත මූලාශ්රය",
			"National Institute of Infectious Diseases":
				"බෝවන රෝග පිළිබඳ ජාතික ආයතනය",
			"National Hospital Sri Lanka": "ශ්‍රී ලංකා ජාතික රෝහල",
			"TH - Ragama": "ශික්ෂණ රෝහල - රාගම",
			"TH - Karapitiya": "ශික්ෂණ රෝහල - කරපිටිය",
			"TH - Anuradhapura": "ශික්ෂණ රෝහල - කරපිටිය",
			"TH - Kurunegala": "ශික්ෂණ රෝහල - කුරුණගල",
			"TH- Jaffna": "ශික්ෂණ රෝහල - යාපනය",
			"National Hospital Kandy": "ජාතික රෝහල - මහනුවර",
			"TH – Batticaloa": "ශික්ෂණ රෝහල - මඩකලපුව",
			"DGH- Gampaha": "දිස්ත්‍රික් මහ රෝහල - ගම්පහ",
			"DGH – Negombo": "දිස්ත්‍රික් මහ රෝහල - මීගමුව",
			"TH – Rathnapura": "ශික්ෂණ රෝහල - රත්නපුර",
			"PGH – Badulla": "පළාත් මහ රෝහල - බදුල්ල",
			LRH: "රිජ්වේ ආර්යා ළමා රෝහල",
			DMH: "ඩි සොයිසා කාන්තා රෝහල",
			"DGH – Polonnaruwa": "දිස්ත්‍රික් මහ රෝහල - පොලොන්නරුව",
			"TH - Kalubowila": "දිස්ත්‍රික් මහ රෝහල - කලුබෝවිල",
			"Castle Street Teaching Hospital": "කාසල් වීදියේ ශික්ෂණ රෝහල",
			"Base Hospital- Hambantota": "මූලික රෝහල - හම්බන්තොට",
			"Base Hospital - Monaragala": "මූලික රෝහල - මොනරාගල",
			"Base Hospital - Welikanda": "මූලික රෝහල - වැලිකන්ද",
			"DGH-Kalutara": "දිස්ත්‍රික් මහ රෝහල - කළුතර",
			"Chest Hospital Welisara": "ළය රෝහල - වැලිසර"
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
			DATA_SOURCE: "தரவு மூலம்",
			"National Institute of Infectious Diseases":
				"தேசிய தொற்று நோயியல் நிறுவனம்",
			"National Hospital Sri Lanka": "இலங்கை தேசிய வைத்தியசாலை",
			"TH - Ragama": "போதனா வைத்தியசாலை - ராகம",
			"TH - Karapitiya": "போதனா வைத்தியசாலை - கராபிடிய",
			"TH - Anuradhapura": "போதனா வைத்தியசாலை - அனுராதபுரம்",
			"TH - Kurunegala": "போதனா வைத்தியசாலை - குருநாகல்",
			"TH- Jaffna": "போதனா வைத்தியசாலை - யாழ்ப்பாணம்",
			"National Hospital Kandy": "தேசிய வைத்தியசாலை கண்டி",
			"TH – Batticaloa": "போதனா வைத்தியசாலை - மட்டக்களப்பு",
			"DGH- Gampaha": "மாவட்ட பொது வைத்தியசாலை - கம்பஹா",
			"DGH – Negombo": "மாவட்ட பொது வைத்தியசாலை - நீர் கொழும்பு",
			"TH – Rathnapura": "போதனா வைத்தியசாலை - இரத்தினபுரி",
			"PGH – Badulla": "மாகான அரச வைத்தியசாலை - பதுளை",
			LRH: "லேடி ரிட்ஜ்வே வைத்தியசாலை",
			DMH: "டி சோய்சா மகப்பேறு வைத்தியசாலை",
			"DGH – Polonnaruwa": "மாவட்ட பொது வைத்தியசாலை - பொலன்னறுவை",
			"TH - Kalubowila": "கொழும்பு தெற்கு போதனா வைத்தியசாலை",
			"Castle Street Teaching Hospital": "காசல் வீதி மகளிர் போதனா மருத்துவமனை",
			"Base Hospital- Hambantota": "ஆதார வைத்தியசாலை - ஹம்பாந்தோட்டா",
			"Base Hospital - Monaragala": "ஆதார வைத்தியசாலை - மோனராகலா",
			"Base Hospital - Welikanda": "ஆதார வைத்தியசாலை - வாலிகண்ட",
			"DGH-Kalutara": "மாவட்ட பொது வைத்தியசாலை - களுத்துறை",
			"Chest Hospital Welisara": "மார்பு வைத்தியசாலை -வெலிசரா"
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
