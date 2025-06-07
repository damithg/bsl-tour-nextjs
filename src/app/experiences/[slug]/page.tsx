interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = params;
}