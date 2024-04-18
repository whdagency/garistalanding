import { useTranslation } from 'next-i18next';

function Trans() {
  const { t } = useTranslation('common');  // Referencing the 'common' namespace

  return (
    <main>
      <h1>{t('welcome')}</h1> 
    </main>
  );
}

export default Trans;