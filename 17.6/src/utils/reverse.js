export function reverse(world) {
    const lowerWorld = world.toLowerCase();
    const result = lowerWorld.split('').reverse().join('')
    return result;
}