import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

const BarChart = ({ data }) => {
    return (
    <div style={{ height: '400px' }}>
        <ResponsiveBar
            data={data}
            keys={[
                'Credits spent (Millions)',
                'Unknown cost (# of Starships)',
            ]}
            indexBy="episode"
            margin={{ top: 50, right: 220, bottom: 50, left: 120 }}
            padding={0.3}
            layout="horizontal"
            groupMode="grouped"
            valueScale={{ type: 'symlog' }}
            indexScale={{ type: 'band', round: true }}
            valueFormat=" >-,~"
            colors={{ scheme: 'pastel2' }}
            enableGridX={true}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'unknown1'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'known1'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Films',
                legendPosition: 'middle',
                legendOffset: -80,
                truncateTickAt: 0
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
        />
    </div>
    )
};

export default BarChart;