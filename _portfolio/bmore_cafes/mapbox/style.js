
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "StamenTerrain_0": {
            "type": "raster",
            "tiles": ["https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "baltimore_cafes_1": {
            "type": "geojson",
            "data": json_baltimore_cafes_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_StamenTerrain_0_0",
            "type": "raster",
            "source": "StamenTerrain_0"
        },
        {
            "id": "lyr_baltimore_cafes_1_0",
            "type": "circle",
            "source": "baltimore_cafes_1",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'cuisine'], 'american'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'bagel'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'bagel;coffee_shop'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'breakfast'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'breakfast;coffee_shop;crepe;pancake;sandwich'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'breakfast;coffee_shop;sandwich'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'bubble_tea'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'coffe;ice_cream'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'coffee'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'coffee_shop'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'coffee_shop;sandwich'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'coffee_shop;sandwich;muffin'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'deli'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'frozen_yogurt;cupcake'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'ice_cream'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'italian;coffee_shop;sandwich'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'regional;cafe'], ['/', 7.142857142857142, 2], ['==', ['get', 'cuisine'], 'tea'], ['/', 7.142857142857142, 2], ['/', 7.142857142857142, 2]], 'circle-color': ['case', ['==', ['get', 'cuisine'], 'american'], '#0d65ca', ['==', ['get', 'cuisine'], 'bagel'], '#d05874', ['==', ['get', 'cuisine'], 'bagel;coffee_shop'], '#a5e582', ['==', ['get', 'cuisine'], 'breakfast'], '#5164ce', ['==', ['get', 'cuisine'], 'breakfast;coffee_shop;crepe;pancake;sandwich'], '#e7e971', ['==', ['get', 'cuisine'], 'breakfast;coffee_shop;sandwich'], '#5dc87b', ['==', ['get', 'cuisine'], 'bubble_tea'], '#33b5dd', ['==', ['get', 'cuisine'], 'coffe;ice_cream'], '#8a2aea', ['==', ['get', 'cuisine'], 'coffee'], '#e66b60', ['==', ['get', 'cuisine'], 'coffee_shop'], '#e05dcf', ['==', ['get', 'cuisine'], 'coffee_shop;sandwich'], '#78e0b7', ['==', ['get', 'cuisine'], 'coffee_shop;sandwich;muffin'], '#db6c22', ['==', ['get', 'cuisine'], 'deli'], '#5134e3', ['==', ['get', 'cuisine'], 'frozen_yogurt;cupcake'], '#89e7df', ['==', ['get', 'cuisine'], 'ice_cream'], '#a4cd52', ['==', ['get', 'cuisine'], 'italian;coffee_shop;sandwich'], '#1be014', ['==', ['get', 'cuisine'], 'regional;cafe'], '#c732e8', ['==', ['get', 'cuisine'], 'tea'], '#d7b461', '#dc2288'], 'circle-opacity': ['case', ['==', ['get', 'cuisine'], 'american'], 1.0, ['==', ['get', 'cuisine'], 'bagel'], 1.0, ['==', ['get', 'cuisine'], 'bagel;coffee_shop'], 1.0, ['==', ['get', 'cuisine'], 'breakfast'], 1.0, ['==', ['get', 'cuisine'], 'breakfast;coffee_shop;crepe;pancake;sandwich'], 1.0, ['==', ['get', 'cuisine'], 'breakfast;coffee_shop;sandwich'], 1.0, ['==', ['get', 'cuisine'], 'bubble_tea'], 1.0, ['==', ['get', 'cuisine'], 'coffe;ice_cream'], 1.0, ['==', ['get', 'cuisine'], 'coffee'], 1.0, ['==', ['get', 'cuisine'], 'coffee_shop'], 1.0, ['==', ['get', 'cuisine'], 'coffee_shop;sandwich'], 1.0, ['==', ['get', 'cuisine'], 'coffee_shop;sandwich;muffin'], 1.0, ['==', ['get', 'cuisine'], 'deli'], 1.0, ['==', ['get', 'cuisine'], 'frozen_yogurt;cupcake'], 1.0, ['==', ['get', 'cuisine'], 'ice_cream'], 1.0, ['==', ['get', 'cuisine'], 'italian;coffee_shop;sandwich'], 1.0, ['==', ['get', 'cuisine'], 'regional;cafe'], 1.0, ['==', ['get', 'cuisine'], 'tea'], 1.0, 1.0], 'circle-stroke-width': ['case', ['==', ['get', 'cuisine'], 'american'], 1, ['==', ['get', 'cuisine'], 'bagel'], 1, ['==', ['get', 'cuisine'], 'bagel;coffee_shop'], 1, ['==', ['get', 'cuisine'], 'breakfast'], 1, ['==', ['get', 'cuisine'], 'breakfast;coffee_shop;crepe;pancake;sandwich'], 1, ['==', ['get', 'cuisine'], 'breakfast;coffee_shop;sandwich'], 1, ['==', ['get', 'cuisine'], 'bubble_tea'], 1, ['==', ['get', 'cuisine'], 'coffe;ice_cream'], 1, ['==', ['get', 'cuisine'], 'coffee'], 1, ['==', ['get', 'cuisine'], 'coffee_shop'], 1, ['==', ['get', 'cuisine'], 'coffee_shop;sandwich'], 1, ['==', ['get', 'cuisine'], 'coffee_shop;sandwich;muffin'], 1, ['==', ['get', 'cuisine'], 'deli'], 1, ['==', ['get', 'cuisine'], 'frozen_yogurt;cupcake'], 1, ['==', ['get', 'cuisine'], 'ice_cream'], 1, ['==', ['get', 'cuisine'], 'italian;coffee_shop;sandwich'], 1, ['==', ['get', 'cuisine'], 'regional;cafe'], 1, ['==', ['get', 'cuisine'], 'tea'], 1, 1], 'circle-stroke-color': ['case', ['==', ['get', 'cuisine'], 'american'], '#232323', ['==', ['get', 'cuisine'], 'bagel'], '#232323', ['==', ['get', 'cuisine'], 'bagel;coffee_shop'], '#232323', ['==', ['get', 'cuisine'], 'breakfast'], '#232323', ['==', ['get', 'cuisine'], 'breakfast;coffee_shop;crepe;pancake;sandwich'], '#232323', ['==', ['get', 'cuisine'], 'breakfast;coffee_shop;sandwich'], '#232323', ['==', ['get', 'cuisine'], 'bubble_tea'], '#232323', ['==', ['get', 'cuisine'], 'coffe;ice_cream'], '#232323', ['==', ['get', 'cuisine'], 'coffee'], '#232323', ['==', ['get', 'cuisine'], 'coffee_shop'], '#232323', ['==', ['get', 'cuisine'], 'coffee_shop;sandwich'], '#232323', ['==', ['get', 'cuisine'], 'coffee_shop;sandwich;muffin'], '#232323', ['==', ['get', 'cuisine'], 'deli'], '#232323', ['==', ['get', 'cuisine'], 'frozen_yogurt;cupcake'], '#232323', ['==', ['get', 'cuisine'], 'ice_cream'], '#232323', ['==', ['get', 'cuisine'], 'italian;coffee_shop;sandwich'], '#232323', ['==', ['get', 'cuisine'], 'regional;cafe'], '#232323', ['==', ['get', 'cuisine'], 'tea'], '#232323', '#232323']}
        }
],
}