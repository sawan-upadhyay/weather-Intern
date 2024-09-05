import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import './report.css';
import Loading from './Loading';


function Weeklyreport() {
  const weatherData = useSelector((state) => state.weatherData);
  const city = useSelector((state) => state.city);
  const dats = weatherData.data?.forecast.forecastday[0].hour;
  const [forecast, setForecast] = useState([]);
  const [search, setSearch] = useState('');
  const [filterForecast, setFilterForecast] = useState([]);
  const days = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];

  const getFormattedDate = (dayOffset) => {
    const today = new Date();
    today.setDate(today.getDate() + dayOffset);
    return today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = days.map(day =>
          fetch(`https://api.weatherapi.com/v1/future.json?key=52656d58856e4421b2562827242608&q=${city}&dt=${getFormattedDate(day)}`).then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
        );

        const responses = await Promise.all(requests);

        setForecast(responses);
        setFilterForecast(responses);
      } catch (err) {
        console.log(err.message);
      }
    };


    fetchData();
    console.log(forecast);
  }, [city]);

  useEffect(() => {
    if (forecast.length > 0) {
      console.log(forecast);
    }
  }, [forecast]);

  useEffect(() => {
    let result = 0;
    if (!isNaN(search)) {
      result = forecast.filter((obj) => Number(obj.forecast.forecastday[0].day.avgtemp_c) > Number(search));
      setFilterForecast(result);
    }

  }, [search])

  console.log("forecast dikha?");
  const columns = [
    {
      name: 'Date',
      selector: row => row.forecast.forecastday[0].date,
      sortable: true,
    },
    {
      name: 'Condition',
      selector: row => <p className='text-center font-semibold text-2xl'>{row.forecast.forecastday[0].day.condition.text}</p>,

    },
    {
      name: 'Average Temp.in °C',
      selector: row => row.forecast.forecastday[0].day.avgtemp_c,
      sortable: true,
    },
    {
      name: 'Weather View',
      selector: row => <img src={row.forecast.forecastday[0].day.condition.icon} />,
    },
  ];
  const customStyles = {
    header: {
      style: {
        backgroundColor: '#e3f2fd',
        fontSize: '28px'
      },
    },
    headRow: {
      style: {
        minHeight: '56px',
      },
    },
    headCells: {
      style: {
        color: 'slate',
        fontSize: '24px',
        backgroundColor: 'burlywood',
      },
    },
    rows: {
      style: {
        minHeight: '72px',
        backgroundColor: 'antiquewhite',
        fontSize: '24px',
        fontWeight: 'bold',
        // override the row height
      },
    },
    pagination: {
      style: {
        borderTopStyle: 'solid',

        borderTopColor: '#e3f2fd',
      },
    },
  };
  if (!forecast)
    return (<Loading />);

  return (
    <>


      { <DataTable
        title=""
        columns={columns}
        data={filterForecast}
        pagination
        highlightOnHover
        customStyles={customStyles}
        fixedHeader
        responsive={true}
        subHeader
        subHeaderComponent={<div className="w-full flex flex-wrap justify-between items-center">
          <h1 className="text-2xl font-bold">Weather Weekly Report</h1>
          <input
            type="text"
            placeholder="Search for Minimum temp..."
            className="w-1/3 border border-slate-900 bg-green-300 font-semibold rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>}
      />}
    </>
  )
}

export default Weeklyreport;


