export default function calculateOffset(page: number, loadsPerPage: number) {
  return (page - 1) * loadsPerPage;
}
