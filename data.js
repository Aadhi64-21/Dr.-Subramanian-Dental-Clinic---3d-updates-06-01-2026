var APP_DATA = {
  "scenes": [
    {
      "id": "0-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.0005439952000170223,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -0.3684616407711765,
          "pitch": -0.05568493096928151,
          "rotation": 4.71238898038469,
          "target": "1-waiting"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-waiting",
      "name": "Waiting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 1.6117186468828555,
          "pitch": -0.0813603139725636,
          "rotation": 3.141592653589793,
          "target": "0-reception"
        },
        {
          "yaw": -1.0969932750014557,
          "pitch": -0.09886944143365994,
          "rotation": 0,
          "target": "2-first-floor-stair-wall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-first-floor-stair-wall",
      "name": "First floor stair wall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 0.4059419380826679,
          "pitch": -0.002937323728124497,
          "rotation": 1.5707963267948966,
          "target": "3-dental-op-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dental-op-01",
      "name": "Dental op 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 0.17741168641518357,
          "pitch": -0.03459061619335202,
          "rotation": 0,
          "target": "4-dental-op-02"
        },
        {
          "yaw": -0.17627608291339314,
          "pitch": -0.0046148131942533865,
          "rotation": 0,
          "target": "5-dental-op-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dental-op-02",
      "name": "Dental op 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -0.18421555113103238,
          "pitch": -0.05294463700990626,
          "rotation": 0,
          "target": "3-dental-op-01"
        },
        {
          "yaw": 0.5523955808392635,
          "pitch": -0.11028227992117934,
          "rotation": 1.5707963267948966,
          "target": "5-dental-op-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dental-op-03",
      "name": "Dental op 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 1.7555309520622204,
          "pitch": 0.022279621159777108,
          "rotation": 3.141592653589793,
          "target": "4-dental-op-02"
        },
        {
          "yaw": -2.31504531048242,
          "pitch": 0.01949853067338836,
          "rotation": 0,
          "target": "3-dental-op-01"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
