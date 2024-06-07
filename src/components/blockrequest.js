import React, { useState } from 'react';
import {
  Container, TextField, Button, Grid, MenuItem, Select, FormControl, InputLabel, Typography, Paper, Box
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const BlockRequest = () => {
  const [blockDate, setBlockDate] = useState(dayjs());
  const [blockType, setBlockType] = useState('');
  const [workType, setWorkType] = useState('');
  const [section, setSection] = useState('');
  const [stationBetween, setStationBetween] = useState('');
  const [line, setLine] = useState('');
  const [demandFrom, setDemandFrom] = useState(dayjs());
  const [demandTo, setDemandTo] = useState(dayjs());
  const [oheDisconnection, setOheDisconnection] = useState('NO');
  const [oheRemark, setOheRemark] = useState('');
  const [stDisconnection, setStDisconnection] = useState('NO');
  const [stRemark, setStRemark] = useState('');
  const [remark, setRemark] = useState('');

  const handleSubmit = () => {
    const formData = {
      blockDate,
      blockType,
      workType,
      section,
      stationBetween,
      line,
      demandFrom,
      demandTo,
      oheDisconnection,
      oheRemark,
      stDisconnection,
      stRemark,
      remark
    };
    console.log(formData);
  };

  const handleReset = () => {
    setBlockDate(dayjs());
    setBlockType('');
    setWorkType('');
    setSection('');
    setStationBetween('');
    setLine('');
    setDemandFrom(dayjs());
    setDemandTo(dayjs());
    setOheDisconnection('NO');
    setOheRemark('');
    setStDisconnection('NO');
    setStRemark('');
    setRemark('');
  };

  const timeOptions = Array.from({ length: 48 }, (_, i) => dayjs().startOf('day').add(i * 30, 'minute'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 3,
        }}
      >
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#fff' }}>
            <Typography variant="h4" gutterBottom>Block Request</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <DatePicker
                  label="Block Date"
                  value={blockDate}
                  onChange={(newValue) => setBlockDate(newValue)}
                  disablePast
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Block Type</InputLabel>
                  <Select
                    value={blockType}
                    onChange={(e) => setBlockType(e.target.value)}
                  >
                    <MenuItem value="NON-Rolling Block">NON-Rolling Block</MenuItem>
                    <MenuItem value="Rolling Block">Rolling Block</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Work Type"
                  value={workType}
                  onChange={(e) => setWorkType(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Section"
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Station Between"
                  value={stationBetween}
                  onChange={(e) => setStationBetween(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Line"
                  value={line}
                  onChange={(e) => setLine(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Demand From</InputLabel>
                  <Select
                    value={demandFrom}
                    onChange={(e) => setDemandFrom(e.target.value)}
                    renderValue={(value) => value.format('HH:mm')}
                  >
                    {timeOptions.map((time, index) => (
                      <MenuItem key={index} value={time} disabled={time.isBefore(dayjs())}>
                        {time.format('HH:mm')}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Demand To</InputLabel>
                  <Select
                    value={demandTo}
                    onChange={(e) => setDemandTo(e.target.value)}
                    renderValue={(value) => value.format('HH:mm')}
                  >
                    {timeOptions.map((time, index) => (
                      <MenuItem key={index} value={time} disabled={time.isBefore(demandFrom)}>
                        {time.format('HH:mm')}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>OHE Disconnection</InputLabel>
                  <Select
                    value={oheDisconnection}
                    onChange={(e) => setOheDisconnection(e.target.value)}
                  >
                    <MenuItem value="NO">NO</MenuItem>
                    <MenuItem value="YES">YES</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="OHE DIS Remark"
                  value={oheRemark}
                  onChange={(e) => setOheRemark(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>S&T Disconnection</InputLabel>
                  <Select
                    value={stDisconnection}
                    onChange={(e) => setStDisconnection(e.target.value)}
                  >
                    <MenuItem value="NO">NO</MenuItem>
                    <MenuItem value="YES">YES</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="S&T DIS Remark"
                  value={stRemark}
                  onChange={(e) => setStRemark(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Remark"
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="space-between">
                  <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                  <Button variant="outlined" color="primary" onClick={handleReset}>
                    Reset
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </LocalizationProvider>
  );
};

export default BlockRequest;
