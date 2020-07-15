import React from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries
} from 'react-vis';

function ResultGraph() {
    const data = [
        {
            data: {
                battery: 0.7,
                design: .8,
                useful: 0.9,
                speed: 0.67,
                weight: 0.8
            },
            meta: { color: 'blue' }
        },
        {
            data: {
                battery: 0.6,
                design: .85,
                useful: 0.5,
                speed: 0.6,
                weight: 0.7
            },
            meta: { color: 'red' }
        }
    ];

    const captions = {
        battery: 'Battery Capacity',
        design: 'Design',
        useful: 'Usefulness',
        speed: 'Speed',
        weight: 'Weight'
    };

    return (
        <div>
            <div style={{float:"left"}}>
                <RadarChart
                    captions={captions}
                    data={data}
                    size={400}
                />
            </div>
            <div style={{float:"right"}}>
                <XYPlot margin={{ bottom: 70 }} xType="ordinal" width={300} height={400}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis tickLabelAngle={-35} />
                    <YAxis />
                    <VerticalBarSeries
                        data={[
                            { x: 'Apples', y: 10 },
                            { x: 'Bananas', y: 5 },
                            { x: 'Cranberries', y: 15 }
                        ]}
                    />
                    <VerticalBarSeries
                        data={[
                            { x: 'Apples', y: 12 },
                            { x: 'Bananas', y: 2 },
                            { x: 'Cranberries', y: 11 }
                        ]}
                    />
                </XYPlot>
            </div>
        </div>
    );
}

export default ResultGraph;