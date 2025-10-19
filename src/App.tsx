import React, { useState } from 'react';
import './App.css';
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
import { ThemeProvider, createTheme } from '@mui/material/styles';

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

function FlagIcon({ country }: { country: 'es' | 'en' }) {
  if (country === 'es') {
    return (
      <svg width="20" height="14" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect width="60" height="40" fill="#AA151B" />
        <rect y="10" width="60" height="20" fill="#F1BF00" />
        <rect y="0" width="60" height="8" fill="#AA151B" />
        <rect y="32" width="60" height="8" fill="#AA151B" />
      </svg>
    );
  }

  return (
    <svg width="20" height="14" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#fff" strokeWidth="6" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" strokeWidth="4" />
      <rect x="26" width="8" height="40" fill="#fff" />
      <rect y="16" width="60" height="8" fill="#fff" />
      <rect x="27" width="6" height="40" fill="#C8102E" />
      <rect y="17" width="60" height="6" fill="#C8102E" />
    </svg>
  );
}

function UfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" width="40" height="40" role="img" aria-hidden {...props}>
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#9be7ff" />
          <stop offset="1" stopColor="#6ec6ff" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0" stopColor="#ddd" />
          <stop offset="1" stopColor="#bbb" />
        </linearGradient>
      </defs>

      <ellipse cx="32" cy="20" rx="14" ry="8" fill="url(#g1)" />
      <ellipse cx="32" cy="20" rx="12" ry="6" fill="rgba(255,255,255,0.15)" />
      <ellipse cx="32" cy="32" rx="22" ry="10" fill="url(#g2)" />
      <ellipse cx="32" cy="34" rx="20" ry="6" fill="#9aa" />
      <g fill="#ffd54f">
        <circle cx="10" cy="34" r="2.2" />
        <circle cx="20" cy="36" r="2.2" />
        <circle cx="32" cy="37" r="2.2" />
        <circle cx="44" cy="36" r="2.2" />
        <circle cx="54" cy="34" r="2.2" />
      </g>
      <ellipse cx="32" cy="44" rx="18" ry="6" fill="rgba(158,219,255,0.12)" />
      <path d="M10 34 C14 26, 50 26, 54 34" fill="none" stroke="#667" strokeWidth="1" />
    </svg>
  );
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#000000' },
    text: { primary: '#ffffff', secondary: '#cccccc' },
  },
});

function App() {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const setLang = (lng: 'es' | 'en') => {
    void i18n.changeLanguage(lng);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <UfoIcon style={{ width: 40, height: 40, marginRight: 12 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t('app.title')}
          </Typography>

          <Button color="inherit" onClick={() => setLang('es')} startIcon={<FlagIcon country="es" />}
          >
            {t('lang.es')}
          </Button>

          <Button color="inherit" onClick={() => setLang('en')} startIcon={<FlagIcon country="en" />}
          >
            {t('lang.en')}
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label={t('app.title') as string}
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

          <Box component="img" src="/portada.png" alt="UFO" sx={{ maxWidth: '50%', height: 'auto', borderRadius: 2, my: 2 }}
          />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Typography variant="h6" gutterBottom>
            {t('items.worldTitle')}
          </Typography>

          <Box component="img" src="/portada3.png" alt="UFO" sx={{ maxWidth: '50%', height: 'auto', borderRadius: 2, my: 2 }}
          />
          <Typography paragraph>{t('items.characters')}</Typography>
          <Typography paragraph>{t('items.objects')}</Typography>

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            {t('items.rulesTitle')}
          </Typography>
          <List dense>
            {(() => {
              const rulesRaw = t('items.rules', { returnObjects: true }) as unknown;
              const rulesArray = Array.isArray(rulesRaw)
                ? (rulesRaw as string[])
                : typeof rulesRaw === 'string'
                  ? [rulesRaw]
                  : [];
              return rulesArray.map((r: string, i: number) => (
                <ListItem key={i}>
                  <ListItemText primary={r} />
                </ListItem>
              ));
            })()}
          </List>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Typography variant="h6" gutterBottom>
            {t('phase1.title')}
          </Typography>
          <Box component="img" src="/portada4.png" alt="UFO" sx={{ maxWidth: '50%', height: 'auto', borderRadius: 2, my: 2 }}
          />
          <Typography paragraph>{t('phase1.text')}</Typography>
          <Typography paragraph>{t('phase1.mechanics')}</Typography>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Typography variant="h6" gutterBottom>
            {t('phase2.title')}
          </Typography>
          <Box component="img" src="/portada5.png" alt="UFO" sx={{ maxWidth: '50%', height: 'auto', borderRadius: 2, my: 2 }}
          />
          <Typography paragraph>{t('phase2.text')}</Typography>
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Typography variant="h6" gutterBottom>
            {t('phase3.title')}
          </Typography>
          <Box component="img" src="/portada2.png" alt="UFO" sx={{ maxWidth: '50%', height: 'auto', borderRadius: 2, my: 2 }}
          />
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
    </ThemeProvider>
  );
}

export default App;