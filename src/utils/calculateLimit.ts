export default function calculateLimit(
  offset: number,
  loadsPerPage: number,
  maxElements: number
) {
  const potentialLimit = offset + loadsPerPage - maxElements;
  return potentialLimit > 0 ? potentialLimit : loadsPerPage;
}
