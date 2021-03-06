"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles = `{
  "root": {
    "margin": 0,
    "width": "100%",
    "height": "100%",
    "position": "relative"
  },
  "details": {
    "padding": "2.5vw 4.5vw"
  },
  "snapshotImg": {
    "objectFit": "cover"
  },
  "logo": {
    "position": "absolute",
    "top": "5vw",
    "right": "5vw",
    "width": "21vw"
  },
  "configurationName": {
    "margin": "1vw 0 2.5vw"
  },
  "svg": {
    "width": "100%",
    "height": "auto"
  },
  "configurationItems": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "margin": "-1vw 0 0 -7vw",
    "width": "107.5vw"
  },
  "configurationItem": {
    "display": "flex",
    "flexDirection": "column",
    "width": "42vw",
    "margin": "1vw 0 0 7vw"
  },
  "configurationItemName": {
    "margin": "1vw 0 0.75vw"
  },
  "configurationItemContent": {
    "borderTop": "0.2vw solid #001667",
    "borderBottom": "0.2vw solid #B82121",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "height": "14.8vw"
  },
  "column": {
    "width": "50%",
    "display": "flex",
    "flexDirection": "column"
  },
  "notLastColumn": {
    "borderRight": "0.2vw solid #001667"
  },
  "cell": {
    "height": "3.7vw",
    "width": "100%",
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "nextCell": {
    "borderTop": "0.15vw solid #D8D8D8"
  },
  "mediumText": {
    "color": "#001667",
    "fontSize": "1.7vw",
    "fontFamily": "OptimaLTPro-Medium",
    "lineHeight": "0.17vw"
  },
  "smallText": {
    "color": "#001667",
    "fontFamily": "OptimaLTPro-Medium",
    "fontSize": "1.3vw",
    "lineHeight": "0.19vw"
  },
  "title": {
    "color": "#001667",
    "fontFamily": "OptimaLTPro-Medium",
    "fontSize": "2.4vw",
    "lineHeight": "0.25vw"
  },
  "subtitle": {
    "color": "#001667",
    "fontFamily": "OptimaLTPro-Bold",
    "fontSize": "1.7vw",
    "lineHeight": "0.17vw"
  },
  "configurationItemValue": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "flex-end"
  },
  "configurationNote": {
    "width": "100%",
    "padding": "0.25vw 0"
  },
  "background": {
		"position": "absolute",
		"top": 0,
		"left": 0,
		"width": "100%",
		"height": "100%"
	},
	"customLogo": {
		"position": "absolute",
		"top": "7vw",
		"right": "6vw",
		"width": "21vw",
		"height": "12vw",
    "display": "flex"
	},
	"margin": {
		"position": "absolute",
		"top": 0,
		"left": 0,
		"height": "100%",
		"width": "28vw"
	},
	"image": {
		"width": "100%",
		"height": "100%"
	},
	"logoImage": {
    "objectFit": "contain"
	},
  "header": {
		"position": "absolute",
		"top": "21vw",
		"right": "6vw",
		"width": "69vw"
	},
	"headerContent": {
		"position": "relative",
		"with": "100%"
	},
  "coverTitle": {
		"position": "absolute",
		"left": "2.3vw",
		"top": "6.5vw"
	},
	"coverSubtitle": {
		"position": "absolute",
		"left": "2.3vw",
		"top": "18vw"
	},
	"coverDate": {
		"position": "absolute",
		"left": "52vw",
		"top": "1.5vw"
	},
	"coverTitleText": {
		"color": "#FFFFFF",
		"fontFamily": "OptimaLTPro-Roman",
		"fontSize": "4vw",
		"letterSpacing": "0.5px",
		"lineHeight": "0.22vw",
		"margin": "0.5vw 0"
	},
	"coverSubtitleText": {
		"color": "#FFFFFF",
		"fontFamily": "OptimaLTPro-Bold",
		"fontSize": "1.7vw",
		"letterSpacing": 0,
		"lineHeight": "0.2vw",
		"margin": "0.5vw 0"
	},
	"coverDateText": {
		"color": "#FFFFFF",
		"fontFamily": "OptimaLTPro-Bold",
		"fontSize": "1.7vw",
		"letterSpacing": 0,
		"lineHeight": "0.2vw",
		"margin": "0.5vw 0"
	}
}`;
exports.default = JSON.parse(styles);
//# sourceMappingURL=styles.js.map