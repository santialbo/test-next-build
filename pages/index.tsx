import { ComponentFoo } from "../components/ComponentFoo";

export default function Home() {
  return (
    <div>
      <ComponentFoo />
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: { foo: ComponentFoo.fragments.foo },
  };
}
