"use client";
import Chart from 'chart.js/auto';
import { useState } from 'react'
import { Line } from 'react-chartjs-2';
import { versionThree, teamResults } from './data';

const chartOptions = {
  scales: {
    y: {
      max: 600,
      beginAtZero: true,
    },
  },
};

const chartOptionsTeam = {
  scales: {
    y: {
      max: 55,
      beginAtZero: true,
    },
  },
};

// This function renders the home page

export default function Home() {
  const [driver, setDriver] = useState(" ");
  const [driverinfo, setDriverinfo] = useState([]);
  const [chartData, setChartData] = useState({
    labels:  ["BRN","SAU","AUS","AZB","MIA","MON","ESP","CAN","AUT","GBR","HUN","BEL","NED","ITA2","SIN","JPN","QAT","USA","MEX","BRA","LAS","UAE"],
    datasets: [
      {
        label: driver,
        data: versionThree[driver]
      }
    ]
  })

  
  const changeDriver = (e) => {
    const selectedDriver = e.target.value
    setDriver(selectedDriver)
    console.log(driver)
    let cPoints = []
    let points = versionThree[selectedDriver].race_finishes
    
    setDriverinfo([
      selectedDriver, 
      versionThree[selectedDriver].race_wins, 
      versionThree[selectedDriver].podium, 
      versionThree[selectedDriver].fastest_lap, 
      versionThree[selectedDriver].average, 
      
      
    ])
    
    cPoints.push(points[0])
    for (let index = 1; index < points.length; index++) {
      cPoints.push(cPoints[index - 1] + points[index])
    }
    
    console.log(cPoints)
    console.log(driverinfo)
    
    setChartData({
      labels:  ["BRN","SAU","AUS","AZB","MIA","MON","ESP","CAN","AUT","GBR","HUN","BEL","NED","ITA2","SIN","JPN","QAT","USA","MEX","BRA","LAS","UAE"],
      datasets: [
        {
          label:selectedDriver,
          data:cPoints,
          fill: true,
          backgroundColor: '#A7D5F9'
        }
      ]
    })
  }
  
  // This section is for the teams
  const [team, setTeam] = useState("");
  const [teamData, setTeamData] = useState({
    labels:  ["BRN","SAU","AUS","AZB","MIA","MON","ESP","CAN","AUT","GBR","HUN","BEL","NED","ITA2","SIN","JPN","QAT","USA","MEX","BRA","LAS","UAE"],
    datasets: [
      {
        label: team,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
      }
    ]
  });

  const changeTeam = (e) => {
    const newTeam = e.target.value;
    setTeam(newTeam)
    console.log(newTeam)
    setTeamData({
      labels:  ["BRN","SAU","AUS","AZB","MIA","MON","ESP","CAN","AUT","GBR","HUN","BEL","NED","ITA2","SIN","JPN","QAT","USA","MEX","BRA","LAS","UAE"],
      datasets: [
        {
          label: team,
          data: teamResults[team]
        }
      ]
    })
  }
  const [driver1, setDriver1] = useState("");
  const [driver2, setDriver2] = useState("");
  const [comapareDriver, setCompareDriver] = useState({
    labels:  ["BRN","SAU","AUS","AZB","MIA","MON","ESP","CAN","AUT","GBR","HUN","BEL","NED","ITA2","SIN","JPN","QAT","USA","MEX","BRA","LAS","UAE"],
    datasets: [
      {
        label: driver1,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
      },
      {
        label: driver2,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
      }

    ]
  })

  const updateDriver1 = (e) => {
    const current = e.target.value
    console.log(current)
    if (driver2 === "" || driver2 == " ") {
      setDriver2("Max Verstappen")
    } {
      setDriver2(driver2)
    }
    setDriver1(current)
    console.log(`driver1 is ${driver1}`)
    console.log(`driver2 is ${driver2}`)


    let cPoints1 = []
    let points1 = versionThree[driver1].race_finishes

    cPoints1.push(points1[0])
    for (let index = 1; index < points1.length; index++) {
      cPoints1.push(cPoints1[index - 1] + points1[index])
    }
    
    let cPoints2 = []
    let points2 = versionThree[driver2].race_finishes

    cPoints2.push(points2[0])
    for (let index = 1; index < points2.length; index++) {
      cPoints2.push(cPoints2[index - 1] + points2[index])
    }


    setCompareDriver({
      labels: ["BRN","SAU","AUS","AZB","MIA","MON","ESP","CAN","AUT","GBR","HUN","BEL","NED","ITA2","SIN","JPN","QAT","USA","MEX","BRA","LAS","UAE"],
      datasets: [
        {
          label: driver1,
          data: cPoints1,
          borderColor: '#36A2EB'
        },
        {
          label: driver2,
          data: cPoints2,
          borderColor: '#36A2EB'
        }
  
      ]
    })
    
  }

  const updateDriver2 = (e) => {
    const current = e.target.value
    console.log(current)
    if (driver1 === "" || driver1 == " ") {
      setDriver1("Max Verstappen")
    } else {
      setDriver1(driver1)
    }
    setDriver2(current)

    console.log(`driver1 is ${driver1}`)
    console.log(`driver2 is ${driver2}`)

    let cPoints1 = []
    let points1 = versionThree[driver1].race_finishes

    cPoints1.push(points1[0])
    for (let index = 1; index < points1.length; index++) {
      cPoints1.push(cPoints1[index - 1] + points1[index])
    }
    
    let cPoints2 = []
    let points2 = versionThree[driver2].race_finishes

    cPoints2.push(points2[0])
    for (let index = 1; index < points2.length; index++) {
      cPoints2.push(cPoints2[index - 1] + points2[index])
    }


    setCompareDriver({
      labels: ["BRN","SAU","AUS","AZB","MIA","MON","ESP","CAN","AUT","GBR","HUN","BEL","NED","ITA2","SIN","JPN","QAT","USA","MEX","BRA","LAS","UAE"],
      datasets: [
        {
          label: driver1,
          data: cPoints1,
          borderColor: '#36A2EB'
        },
        {
          label: driver2,
          data: cPoints2,
          borderColor: '#ffffff'
        }
  
      ]
    })
  }

  return (
    <div className='font-sans bg-[#1D1D11]'>
      {/* <nav class="justify-center">
            <ol class="rounded-full p-5 text-xl justify-center">
                <li class="Compare"><a href="#education">Drivers</a></li>
                <li class="projects"><a href="#project">Team Performance</a></li>
                <li class="contact">Compare Drivers</li>
            </ol>
      </nav> */}  
      <h1 className='text-4xl p-5 text-center bg-[#FF1801] text-white'>A Comprehensive F1 analysis for 2023</h1>
      <div className='flex'>
        <h1 className='mx-10 my-4 p-3 flex-2 bg-[#FF1801] rounded-full text-white'>Choose your driver</h1>
        <div className='flex-1'>
          <select className='mx-10 my-4 p-3 bg-[#FF1801]' value={driver} onChange={changeDriver}>
            <option value=" "></option>
            <option value="Max Verstappen">Max Verstappen</option>
            <option value="Sergio Perez">Sergio</option>
            <option value="Charles Leclerc">Charles Leclerc</option>
            <option value="Carlos Sainz">Carlos Sainz</option>
            <option value="George Russell">George Russell</option>
            <option value="Lewis Hamilton">Lewis Hamilton</option>
            <option value="Esteban Ocon">Esteban Ocon</option>
            <option value="Pierre Gasly">Pierre Gasly</option>
            <option value="Lando Norris">Lando Norris</option>
            <option value="Oscar Piastri">Oscar Piastri</option>
            <option value="Nico Hulkenberg">Nico Hulkenberg</option>
            <option value="Kevin Magnussen">Kevin Magnussen</option>
            <option value="Yuki Tsunoda">Yuki Tsunoda</option>
            <option value="Daniel Riciardo">Daniel Riciardo</option>
            <option value="Valterri Bottas">Valterri Bottas</option>
            <option value="Zhou Guanyu">Zhou Guanyu</option>
            <option value="Fernando Alonso">Fernando Alonso</option>
            <option value="Lance Stroll">Lance Stroll</option>
            <option value="Logan Sergeant">Logan Sergeant</option>
            <option value="Alex Albon">Alex Albon</option>
          </select>
        </div>
      </div>

      {/* // This is the graph and the details on the right of the graph */}
      <div className='flex'>
        <div className='flex-1 mx-20 p-10 flex-1'>
          <Line data={chartData} options={chartOptions}/>
        </div>
        <div className='flex-1 text-3xl p-10 m-5 font-medium bg-[#FF1801] rounded '>
            <p className='py-3 text-white'>Driver: {driver}</p>
            <p className='py-3 text-white'>Race Wins: {driverinfo[1]}</p>
            <p className='py-3 text-white'>Podium: {driverinfo[2]}</p>
            <p className='py-3 text-white'>Fastest Lap: {driverinfo[3]}</p>
            <p className='py-3 text-white'>Average: {driverinfo[4]}</p>
        </div>
      </div>

      {/* // Team Performance */}

      <div>
        <select value={team} onChange={changeTeam}>
          <option>Red Bull</option>
          <option>Mercedes</option>
          <option>Ferrari</option>
          <option>McLaren</option>
          <option>Alpine</option>
          <option>Haas</option>
          <option>Alfa Romeo</option>
          <option>AlphaTauri</option>
          <option>Aston Martin</option>
          <option>Williams</option>
        </select>
      </div>
      <div className='flex-1 mx-20 p-10 flex-1'>
          <Line data={teamData} options={chartOptionsTeam}/>
      </div>

      {/* Comparing Drivers */}
      <div>
        <div className='flex'>
          <select className='mx-10 my-4 p-3 bg-[#FF1801] flex-1' value={driver1} onChange={updateDriver1}>
            <option value=""></option>
            <option value="Max Verstappen">Max Verstappen</option>
            <option value="Sergio Perez">Sergio</option>
            <option value="Charles Leclerc">Charles Leclerc</option>
            <option value="Carlos Sainz">Carlos Sainz</option>
            <option value="George Russell">George Russell</option>
            <option value="Lewis Hamilton">Lewis Hamilton</option>
            <option value="Esteban Ocon">Esteban Ocon</option>
            <option value="Pierre Gasly">Pierre Gasly</option>
            <option value="Lando Norris">Lando Norris</option>
            <option value="Oscar Piastri">Oscar Piastri</option>
            <option value="Nico Hulkenberg">Nico Hulkenberg</option>
            <option value="Kevin Magnussen">Kevin Magnussen</option>
            <option value="Yuki Tsunoda">Yuki Tsunoda</option>
            <option value="Daniel Riciardo">Daniel Riciardo</option>
            <option value="Valterri Bottas">Valterri Bottas</option>
            <option value="Zhou Guanyu">Zhou Guanyu</option>
            <option value="Fernando Alonso">Fernando Alonso</option>
            <option value="Lance Stroll">Lance Stroll</option>
            <option value="Logan Sergeant">Logan Sergeant</option>
            <option value="Alex Albon">Alex Albon</option>
          </select>
          <select className='mx-10 my-4 p-3 bg-[#FF1801] flex-1' value={driver2} onChange={updateDriver2}>
            {/* <option value=""></option> */}
            <option value="Max Verstappen">Max Verstappen</option>
            <option value="Sergio Perez">Sergio</option>
            <option value="Charles Leclerc">Charles Leclerc</option>
            <option value="Carlos Sainz">Carlos Sainz</option>
            <option value="George Russell">George Russell</option>
            <option value="Lewis Hamilton">Lewis Hamilton</option>
            <option value="Esteban Ocon">Esteban Ocon</option>
            <option value="Pierre Gasly">Pierre Gasly</option>
            <option value="Lando Norris">Lando Norris</option>
            <option value="Oscar Piastri">Oscar Piastri</option>
            <option value="Nico Hulkenberg">Nico Hulkenberg</option>
            <option value="Kevin Magnussen">Kevin Magnussen</option>
            <option value="Yuki Tsunoda">Yuki Tsunoda</option>
            <option value="Daniel Riciardo">Daniel Riciardo</option>
            <option value="Valterri Bottas">Valterri Bottas</option>
            <option value="Zhou Guanyu">Zhou Guanyu</option>
            <option value="Fernando Alonso">Fernando Alonso</option>
            <option value="Lance Stroll">Lance Stroll</option>
            <option value="Logan Sergeant">Logan Sergeant</option>
            <option value="Alex Albon">Alex Albon</option>
          </select>
        </div>

        
        {/* graph for comparing drivers */}

        <div>
          <Line data={comapareDriver} option={chartOptions}/>
        </div>
      </div>

    </div>
  )
}


