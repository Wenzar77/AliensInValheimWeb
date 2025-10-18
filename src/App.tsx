import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import './i18n'; // inicializa i18n
import { useTranslation } from 'react-i18next';
import {
  CssBaseline,
  AppBar,
  Tabs,
  Tab,
  Box,
  Container,
  Typography,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  } as const;
}

function App(): JSX.Element {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const setLang = (lng: string) => {
    void i18n.changeLanguage(lng);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{ width: 40, marginRight: 12 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t('app.title')}
          </Typography>
          <Button color="inherit" onClick={() => setLang('es')}>
            {t('lang.es')}
          </Button>
          <Button color="inherit" onClick={() => setLang('en')}>
            {t('lang.en')}
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label={t('app.title')}
          >
            <Tab label={t('tabs.intro')} {...a11yProps(0)} />
            <Tab label={t('tabs.items')} {...a11yProps(1)} />
            <Tab label={t('tabs.phase1')} {...a11yProps(2)} />
            <Tab label={t('tabs.phase2')} {...a11yProps(3)} />
            <Tab label={t('tabs.phase3')} {...a11yProps(4)} />
            <Tab label={t('tabs.phase4')} {...a11yProps(5)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Typography variant="h5" gutterBottom>
            {t('intro.summaryTitle')}
          </Typography>
          <Typography paragraph>{t('intro.summaryText')}</Typography>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Typography variant="h6" gutterBottom>
            {t('items.worldTitle')}
          </Typography>
          <Typography paragraph>{t('items.characters')}</Typography>
          <Typography paragraph>{t('items.objects')}</Typography>

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            {t('items.rulesTitle')}
          </Typography>
          <List dense>
            {t('items.rules', { returnObjects: true }).map((r: string, i: number) => (
              <ListItem key={i}>
                <ListItemText primary={r} />
              </ListItem>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Typography variant="h6" gutterBottom>
            {t('phase1.title')}
          </Typography>
          <Typography paragraph>{t('phase1.text')}</Typography>
          <Typography paragraph>{t('phase1.mechanics')}</Typography>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Typography variant="h6" gutterBottom>
            {t('phase2.title')}
          </Typography>
          <Typography paragraph>{t('phase2.text')}</Typography>
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Typography variant="h6" gutterBottom>
            {t('phase3.title')}
          </Typography>
          <Typography paragraph>{t('phase3.text')}</Typography>
        </TabPanel>

        <TabPanel value={value} index={5}>
          <Typography variant="h6" gutterBottom>
            {t('phase4.title')}
          </Typography>
          <Typography paragraph>{t('phase4.text')}</Typography>
          <Typography paragraph>{t('phase4.rewards')}</Typography>
        </TabPanel>
      </Container>
    </>
  );
}

export default App;
