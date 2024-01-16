'use client';

import { useEffect, useState } from 'react';
import { Button, Paper, Text, Group, CloseButton } from '@mantine/core';
import { getCookies, setCookies } from './cookie';
import googleAnalytics from './googleAnalyticsCode';
import classes from './CookieConsentBanner.module.css';

interface Cookies {
  cookiesSet?: string;
  cookiesConsent?: string;
}

export function CookiesBanner() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    //Check local storage for saved cookies
    const storedCookies: Cookies = getCookies();
    //console.log(storedCookies);

    if (storedCookies.cookiesSet !== 'true') {
      //Nicht optimal, für Type Safety wäre wohl Bool type besser
      setShowPopup(true);
      //console.log('storedCookies.cookiesSet === \'true\'');
    }

    //Google Analytics bei jedem Revisit nochmal ausführen, wenn der Consent da ist.
    const gaTriggered = sessionStorage.getItem('gaTriggered');
    //console.log(gaTriggered);
    if (storedCookies.cookiesConsent === 'true' && gaTriggered !== 'true') {
      sessionStorage.setItem('gaTriggered', 'true');
      googleAnalytics();
    }
  }, []);

  const handleAccept = () => {
    //Accepting Cookies
    setCookies('cookiesSet', 'true', 365);
    setCookies('cookiesConsent', 'true', 365);
    googleAnalytics();
    setShowPopup(false);
  };
  const handleReject = () => {
    // Perform any necessary actions on rejecting cookies
    setCookies('cookiesSet', 'true', 365);
    setCookies('cookiesConsent', 'false', 365);
    setShowPopup(false);
  };

  if (!showPopup) {
    return null; // Don't render the popup if it's not needed
  }
  return (
    <Paper withBorder p="lg" radius="md" shadow="md" className={classes.consentBanner}>
      <Group justify="space-between" mb="xs">
        <Text fz="md" fw={500}>
          Cookies
        </Text>
        <CloseButton mr={-9} mt={-9} />
      </Group>
      <Text c="dimmed" fz="xs">
        Liebe Besucher unserer Website,
        <br />
        Wir nutzen Analysecookies, um Euren Aufenthalt zu optimieren. Eure Privatsphäre ist uns
        wichtig - wir behandeln Eure Daten sorgfältig und respektvoll.
        <br />
        Euer Vertrauen schätzen wir sehr.
      </Text>
      <Group justify="flex-end" mt="md">
        <Button variant="default" size="xs" onClick={handleReject}>
          Cookies ablehnen
        </Button>
        <Button variant="outline" size="xs" onClick={handleAccept}>
          Cookies akzeptieren
        </Button>
      </Group>
    </Paper>
  );
}
