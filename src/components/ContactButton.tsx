import { githubProfile } from "../data/content";

type ContactButtonProps = {
  id?: string;
};

export function ContactButton({ id }: ContactButtonProps) {
  return (
    <a
      id={id}
      href={githubProfile}
      target="_blank"
      rel="noreferrer"
      aria-label="Qikang Yan on GitHub"
      className="btn-primary"
    >
      Contact Me
    </a>
  );
}
