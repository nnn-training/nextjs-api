import CountryCapitalList from '@/components/CountryCapitalList';
import PrefectureCapitalList from '@/components/PrefectureCapitalList';

export default function TopPage() {
  return (
    <div>
      <CountryCapitalList/>
      <PrefectureCapitalList/>
    </div>
  );
}
